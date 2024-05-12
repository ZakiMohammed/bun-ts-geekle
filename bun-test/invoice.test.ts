// write test cases for invoice function

import { expect, it, describe } from "bun:test";
import { calculate } from "./invoice";

describe("invoice", () => {
  it("should return 90 if price is 100 and discount is 10", () => {
    expect(calculate(100, 10)).toBe(90);
  });

  it("should return 100 if price is 100 and discount is 10 and location is not USA", () => {
    expect(calculate(100, 10, "Canada")).toBe(100);
  });
});
