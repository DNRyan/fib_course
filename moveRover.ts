import { Rover } from "./types";

const world = {
  width: 10,
  height: 10,
};

export function moveForward(rover: Rover) {
  switch (rover.direction) {
    case "N":
      const newY = rover.y + 1;
      if (newY > world.height) {
        return { ...rover, y: 0 };
      }
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
