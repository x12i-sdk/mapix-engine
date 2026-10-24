import assert from 'node:assert/strict';
import { assertSourceAccess } from '@x12i/mapix-engine';
const caller = { userId: 'example-reviewer', roles: ['mapix.viewer'], sourceAccess: ['fixture-source'] };
assert.doesNotThrow(() => assertSourceAccess(caller, 'fixture-source'));
assert.throws(() => assertSourceAccess(caller, 'restricted-source'));
console.log('The granted source is accepted; the ungranted source is rejected.');
