import { describe, expect, it } from "vitest";
import { initialiseRover, moveForward } from "./rover";

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
  it("Move rover forward by 1", () => {
    let rover = initialiseRover(0, 0, "N")
    expect(moveForward(rover)).toEqual({x: 0, y: 1, direction: "N"});
  });
});