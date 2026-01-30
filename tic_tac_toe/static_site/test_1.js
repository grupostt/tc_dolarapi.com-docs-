const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

// Load the source file and append an export block so we can retrieve the functions
const code = fs.readFileSync(__dirname + '/1.js', 'utf8') + '\nmodule.exports = { calculateSum, calculateResta, findMaxValue };';

const sandbox = { module: { exports: {} }, console, prompt: undefined };
vm.runInNewContext(code, sandbox, { filename: '1.js' });
const { calculateSum, calculateResta, findMaxValue } = sandbox.module.exports;

assert.strictEqual(calculateSum(5, 10), 15);
assert.strictEqual(calculateResta(45, 5), 40);
assert.strictEqual(findMaxValue([3, 5, 7, 2, 8]), 8);
assert.strictEqual(findMaxValue([]), null);

console.log('All tests passed');
