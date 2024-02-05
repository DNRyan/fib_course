import { Rover } from "./types";

export function moveForward(rover: Rover) {
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

export function moveBack(rover: Rover) {
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
