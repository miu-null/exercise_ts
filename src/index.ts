enum Color {
    red = "Red",
    green = "Green",
    blue = "Blue",
}

function printRGB(color: Color): Color {
    return color;
}

console.log(printRGB(Color.red));
console.log(printRGB(Color.green));

enum Direction {
    up = "Up",
    down = "Down",
    left = "Left",
    right = "Right",
}

interface thingsInLife {
    colorOfChair: Color;
    arrow: Direction;
}

function printThingsInLife(things: thingsInLife): string {
    return `color of chair: ${things.colorOfChair} arrow: ${things.arrow}`;
}

console.log(printThingsInLife({colorOfChair: Color.red, arrow: Direction.up}));
