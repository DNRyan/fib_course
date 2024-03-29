import { describe, expect, it } from "vitest";
import { initialiseRover } from "./initialiseRover";
import { moveForward, moveBack, world } from "./moveRover";
import { Direction } from "./types";

describe("move rover", () => {
  it.each([
    ["N", 5, 6],
    ["E", 6, 5],
    ["S", 5, 4],
    ["W", 4, 5],
  ] as const)(
    "Move rover forward by 1 for any direction",
    (direction, x, y) => {
      const rover = initialiseRover(5, 5, direction);
      expect(moveForward(rover)).toEqual({ x, y, direction });
    }
  );

  it.each([
    [[0, 10, "N"], { x: 0, y: 0, direction: "N" }],
    [[0, 0, "S"], { x: 0, y: world.height, direction: "S" }],
  ] as [[number, number, Direction], { x: number; y: number; direction: Direction }][])(
    "Wraps around the edges of the world",
    (init, expected) => {
      const rover = initialiseRover(...init);
      expect(moveForward(rover)).toEqual(expected);
    }
  );

  it.each([
    ["N", 5, 4],
    ["E", 4, 5],
    ["S", 5, 6],
    ["W", 6, 5],
  ] as const)("Move rover back by 1 for any direction", (direction, x, y) => {
    const rover = initialiseRover(5, 5, direction);
    expect(moveBack(rover)).toEqual({ x, y, direction });
  });

  it.each([
    [[0, 10, "S"], { x: 0, y: 0, direction: "S" }],
    [[0, 0, "N"], { x: 0, y: world.height, direction: "N" }],
  ] as [[number, number, Direction], { x: number; y: number; direction: Direction }][])(
    "Wraps around the edges of the world",
    (init, expected) => {
      const rover = initialiseRover(...init);
      expect(moveBack(rover)).toEqual(expected);
    }
  );
});
