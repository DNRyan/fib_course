import { fibonacci } from "./fibonacci";
import { describe, expect, it } from "vitest";

describe("Fibonnaci", () => {
  it("Returns 0 when n=0", () => {
    expect(fibonacci(0)).toBe(0);
  });
  it("Returns 1 when n=1", () => {
    expect(fibonacci(1)).toBe(1);
  })
});
