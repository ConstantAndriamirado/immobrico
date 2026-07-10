const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('package scripts are defined', () => {
  const pkg = require('../package.json');
  assert.ok(pkg.scripts.dev, 'dev script missing');
  assert.ok(pkg.scripts.build, 'build script missing');
  assert.ok(pkg.scripts.start, 'start script missing');
});

test('realisations content exposes many real video entries', () => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'lib', 'content.ts'), 'utf8');
  const videoEntries = [...content.matchAll(/type:\s*'video'/g)];
  assert.ok(videoEntries.length >= 20, 'expected at least 20 video entries');

  const videoUrls = [...content.matchAll(/videoUrl:\s*'([^']+)'/g)].map((match) => match[1]);
  assert.ok(videoUrls.length >= 20, 'expected video entries to exist');
  assert.ok(videoUrls.every((value) => value.startsWith('/videos/')), 'expected video entries to use public video paths');
});
