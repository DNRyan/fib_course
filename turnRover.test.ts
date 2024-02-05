import { describe, expect, it } from "vitest";
import { initialiseRover } from "./initialiseRover";
import { turnRight, turnLeft } from "./turnRover";

describe("turn rover", () => {
  it.each([
    ["N", "E"],
    ["E", "S"],
    ["S", "W"],
    ["W", "N"],
  ] as const)(
    "Turn rover right",
    (direction, new_direction) => {
      const rover = initialiseRover(0, 0, direction);
      expect(turnRight(rover)).toEqual({ x: 0, y: 0, direction: new_direction});
    }
  );
  it.each([
    ["N", "W"],
    ["E", "N"],
    ["S", "E"],
    ["W", "S"],
  ] as const)(
    "Turn rover left",
    (direction, new_direction) => {
      const rover = initialiseRover(0, 0, direction);
      expect(turnLeft(rover)).toEqual({ x: 0, y: 0, direction: new_direction});
    }
  );
});
