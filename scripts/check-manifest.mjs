// Fails the build if the extension manifest requests more than the agreed
// permissions or weakens the Content Security Policy. See SECURITY.md.
import { readFileSync } from 'node:fs';

const path = process.argv[2] ?? 'dist/manifest.json';
const manifest = JSON.parse(readFileSync(path, 'utf8'));
const errors = [];

const ALLOWED_PERMISSIONS = new Set(['storage', 'activeTab', 'scripting']);
const FORBIDDEN_HOSTS = ['<all_urls>', '*://*/*', 'http://*/*', 'https://*/*'];

if (manifest.manifest_version !== 3) errors.push('manifest_version must be 3');

for (const p of manifest.permissions ?? []) {
  if (!ALLOWED_PERMISSIONS.has(p)) errors.push(`Permission not allowed without approval: ${p}`);
}

const hosts = [
  ...(manifest.host_permissions ?? []),
  ...(manifest.content_scripts ?? []).flatMap((c) => c.matches ?? []),
];
for (const h of hosts) {
  if (FORBIDDEN_HOSTS.includes(h)) errors.push(`Broad host access is not allowed: ${h}`);
}

const csp = JSON.stringify(manifest.content_security_policy ?? '');
for (const bad of ['unsafe-eval', 'unsafe-inline', 'http:', 'https:']) {
  if (csp.includes(bad)) errors.push(`Content Security Policy must not contain ${bad}`);
}

if (manifest.externally_connectable) errors.push('externally_connectable is not allowed');

if (errors.length) {
  console.error('Manifest security check failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('Manifest security check passed.');
