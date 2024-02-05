import { describe, expect, it } from "vitest";
import { initialiseRover } from "./initialiseRover";
import { moveForward, moveBack } from "./moveRover";

describe("move rover", () => {
  it.each([
    ["N", 0, 1],
    ["E", 1, 0],
    ["S", 0, -1],
    ["W", -1, 0],
  ] as const)(
    "Move rover forward by 1 for any direction",
    (direction, x, y) => {
      const rover = initialiseRover(0, 0, direction);
      expect(moveForward(rover)).toEqual({ x, y, direction });
    }
  );

  it.each([[[0, 10, "N"], { x: 0, y: 0, direction: "N" }]] as const)(
    "Wraps around the edges of the world",
    (init, expected) => {
      const rover = initialiseRover(...init);
      expect(moveForward(rover)).toEqual(expected);
    }
  );


  it.each([
    ["N", 0, -1],
    ["E", -1, 0],
    ["S", 0, 1],
    ["W", 1, 0],
  ] as const)("Move rover back by 1 for any direction", (direction, x, y) => {
    const rover = initialiseRover(0, 0, direction);
    expect(moveBack(rover)).toEqual({ x, y, direction });
  });
});
