const { add } = require('../dist/index.js');

test('add should add numbers', () => {
  expect(add(1, 2)).toBe(3);
});
