import { describe, it } from "node:test";
import assert from "node:assert";

import { add, subtract, multiply, divide } from "../index.js";

describe("Arithmetic Operations", () => {
  it("should correctly add two numbers", () => {
    const result = add(2, 3);
    assert.strictEqual(result, 5);
  });

  it("should correctly subtract two numbers", () => {
    const result = subtract(5, 3);
    assert.strictEqual(result, 2);
  });

  it("should correctly multiply two numbers", () => {
    const result = multiply(2, 3);
    assert.strictEqual(result, 6);
  });

  it("should correctly divide two numbers", () => {
    const result = divide(6, 3);
    assert.strictEqual(result, 2);
  });

  it("should throw an error when dividing by zero", () => {
    assert.throws(() => {
      divide(6, 0);
    }, /Cannot divide by zero/);
  });
});
