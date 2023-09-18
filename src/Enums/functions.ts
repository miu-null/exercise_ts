// enums
import {Color, Direction} from "../types";

// interface
import type {thingsInLife} from "../types";

function printRGB(color: Color): Color {
    return color;
}

console.log(printRGB(Color.Red));

function printThingsInLife(things: thingsInLife): string {
    return `color of chair: ${things.colorOfChair} arrow: ${things.arrow}`;
}

console.log(printThingsInLife({colorOfChair: Color.Red, arrow: Direction.up}));
