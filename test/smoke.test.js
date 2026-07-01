const test = require('node:test');
const assert = require('node:assert/strict');

test('package scripts are defined', () => {
  const pkg = require('../package.json');
  assert.ok(pkg.scripts.dev, 'dev script missing');
  assert.ok(pkg.scripts.build, 'build script missing');
  assert.ok(pkg.scripts.start, 'start script missing');
});
