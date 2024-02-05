import { fibonacci } from "./fibonacci";
import { describe, expect, it } from "vitest";

describe("Fibonnaci", () => {
  it("Returns 0 when n=0", () => {
    expect(fibonacci(0)).toBe(0);
  });
});
