import { Rover } from "./types";

export const world = {
  width: 10,
  height: 10,
};

export function moveForward(rover: Rover) {
  switch (rover.direction) {
    case "N": {
      const newY = rover.y + 1 > world.height ? 0 : rover.y + 1;
      return { ...rover, y: newY };
    }
    case "E": {
      return { ...rover, x: rover.x + 1 };
    }
    case "S": {
      const newY = rover.y - 1 < 0 ? world.height : rover.y - 1;
      return { ...rover, y: newY };
    }
    case "W": {
      return { ...rover, x: rover.x - 1 };
    }
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
