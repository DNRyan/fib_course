import { Rover } from "./types";

export function turnRight(rover: Rover) {
    switch (rover.direction) {
      case "N":
        return { ...rover, direction: "E"};
      case "E":
        return { ...rover, direction: "S"};
      case "S":
        return { ...rover, direction: "W"};
      case "W":
        return { ...rover, direction: "N"};
    }
  }

export function turnLeft(rover: Rover) {
    switch (rover.direction) {
      case "N":
        return { ...rover, direction: "W"};
      case "E":
        return { ...rover, direction: "N"};
      case "S":
        return { ...rover, direction: "E"};
      case "W":
        return { ...rover, direction: "S"};
    }
  }