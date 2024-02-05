import { describe, expect, it } from "vitest";
import { initialiseRover } from "./initialiseRover";

describe("move rover", () => {
  it.each([
    ["N", 0, 1],
    ["E", 1, 0],
    ["S", 0, 2],
    ["W", 2, 0],
  ] as const)(
    "Move rover forward by 1 for any direction",
    (direction, x, y) => {
      const rover = initialiseRover(x, y, direction);
      expect(rover).toEqual({ x, y, direction });
    }
  );
  it.each([
    ["N", 0, 2],
    ["E", 2, 0],
    ["S", 0, 1],
    ["W", 1, 0],
  ] as const)("Move rover back by 1 for any direction", (direction, x, y) => {
    const rover = initialiseRover(x, y, direction);
    expect(rover).toEqual({ x, y, direction });
  });
});
