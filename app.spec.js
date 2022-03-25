const app = require('./app');

describe("Sum", () => {
  test("sum two numbers", () => {
      expect(app.sum(1, 1)).toEqual(2);
  });
});


describe("Sub", () => {
  test("sub two numbers", () => {
      expect(app.sub(1, 1)).toEqual(1);
  });
});