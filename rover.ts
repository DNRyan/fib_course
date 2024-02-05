type Direction = "N" | "E" | "S" | "W"

export function initialiseRover(
  x: number,
  y: number,
  direction: Direction
) {
  if (["N", "E", "S", "W"].includes(direction)) {
    return { x, y, direction };
  }

  throw new Error("Invalid direction provided");
}

export function moveForward(rover: {x: number , y: number, direction: Direction}) {
  return {...rover, y: rover.y + 1}
}