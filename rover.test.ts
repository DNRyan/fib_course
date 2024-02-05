import { describe, expect, it } from "vitest";
import { initialiseRover, moveForward, moveBack } from "./rover";

describe("initalise rover", () => {
  it("Initialises a rover object", () => {
    expect(initialiseRover(0, 0, "N")).toEqual({ x: 0, y: 0, direction: "N" });
  });

  it("Throws an error when passed an invalid direction", () => {
    // @ts-expect-error
    expect(() => initialiseRover(0, 0, "X")).toThrowError();
  });
});

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
  it.each([
    ["N", 0, -1],
    ["E", -1, 0],
    ["S", 0, 1],
    ["W", 1, 0],
  ] as const)(
    "Move rover back by 1 for any direction",
    (direction, x, y) => {
      const rover = initialiseRover(0, 0, direction);
      expect(moveBack(rover)).toEqual({ x, y, direction });
    }
  );
});
