import { describe, expect, it } from "vitest";
import { initialiseRover } from "./rover";

describe("rover", () => {
  it("Initialises a rover object", () => {
    expect(initialiseRover(0, 0, "N")).toEqual({ x: 0, y: 0, direction: "N" });
  });

  it("Throws an error when passed an invalid direction", () => {
    // @ts-expect-error
    expect(() => initialiseRover(0, 0, "X")).toThrowError();
  });
});
