import { describe, it, expect } from "bun:test";

import { add, subtract, multiply, divide } from "../index.js";

describe("Arithmetic Operations", () => {
  it("should correctly add two numbers", () => {
    const result = add(2, 3);
    expect(result).toStrictEqual(5);
  });

  it("should correctly subtract two numbers", () => {
    const result = subtract(5, 3);
    expect(result).toStrictEqual(2);
  });

  it("should correctly multiply two numbers", () => {
    const result = multiply(2, 3);
    expect(result).toStrictEqual(6);
  });

  it("should correctly divide two numbers", () => {
    const result = divide(6, 3);
    expect(result).toEqual(2);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => {
      divide(6, 0);
    }).toThrow("Cannot divide by zero");
  });
});
