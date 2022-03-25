const sum = require('./app');
const sub = require('./app');

describe("Sum", () => {
  test("sum two numbers", () => {
      expect(sum(1, 1)).toEqual(2);
  });
});


describe("Sub", () => {
  test("sub two numbers", () => {
      expect(sub(1, 1)).toEqual(0);
  });
});