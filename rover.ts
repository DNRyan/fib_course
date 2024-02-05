export function initialiseRover(
  x: number,
  y: number,
  direction: "N" | "E" | "S" | "W"
) {
  if (["N", "E", "S", "W"].includes(direction)) {
    return { x, y, direction };
  }

  throw new Error("Invalid direction provided");
}
