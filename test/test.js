const assert = require('assert');
const uniqString = require('../index');

describe('uniqString', function() {
  it('default size and dictionary: should return a new value for each iteration', function() {
    const strings = new Set();
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      strings.add(uniqString());
    }

    assert.equal(strings.size, iterations);
  });

  it('custom size: should return a new value for each iteration', function() {
    const strings = new Set();
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      strings.add(uniqString(128));
    }

    assert.equal(strings.size, iterations);
  });

  it('custom size and dictionary: should return a new value for each iteration', function() {
    const strings = new Set();
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      strings.add(uniqString(64, 'abcd1234'));
    }

    assert.equal(strings.size, iterations);
  });
});
