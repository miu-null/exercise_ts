import {Color} from "../types";
console.log(Color);
console.log("------------------keys");
const keys = Object.keys(Color);
console.log(keys);
console.log("------------------values");

const values = Object.values(Color);
console.log(values);

type ObjectType = {
    [color in Color]?: string;
};

const myObject: ObjectType = {};

console.log("------------------object");

values.forEach((key) => {
    myObject[key] = "hello";
    console.log(myObject);
});

console.log("------------------entires");

const keyValues = Object.entries(Color);

console.log(keyValues);
