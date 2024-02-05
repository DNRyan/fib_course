import { fibonacci } from "./fibonacci";
import { describe, expect, it } from "vitest";

describe("Fibonnaci", () => {
  it("Returns 0 when n=0", () => {
    expect(fibonacci(0)).toBe(0);
  });
  it("Returns 1 when n=1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  it("Returns 1 when n=2", () => {
    expect(fibonacci(2)).toBe(1);
  });
  it("Returns 2 when n=3", () => {
    expect(fibonacci(3)).toBe(2);
  });
});
