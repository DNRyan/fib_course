import { Direction } from "./types";

export function initialiseRover(x: number, y: number, direction: Direction) {
  if (["N", "E", "S", "W"].includes(direction)) {
    return { x, y, direction };
  }

  throw new Error("Invalid direction provided");
}
