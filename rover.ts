type Direction = "N" | "E" | "S" | "W";

export function initialiseRover(x: number, y: number, direction: Direction) {
  if (["N", "E", "S", "W"].includes(direction)) {
    return { x, y, direction };
  }

  throw new Error("Invalid direction provided");
}

export function moveForward(rover: {
  x: number;
  y: number;
  direction: Direction;
}) {
  switch (rover.direction) {
    case "N":
      return { ...rover, y: rover.y + 1 };
    case "E":
      return { ...rover, x: rover.x + 1 };
    case "S":
      return { ...rover, y: rover.y - 1 };
    case "W":
      return { ...rover, x: rover.x - 1 };
  }
}

export function moveBack(rover: {
  x: number;
  y: number;
  direction: Direction;
}) {
  switch (rover.direction) {
    case "N":
      return { ...rover, y: rover.y - 1 };
    case "E":
      return { ...rover, x: rover.x - 1 };
    case "S":
      return { ...rover, y: rover.y + 1 };
    case "W":
      return { ...rover, x: rover.x + 1 };
  }
}
