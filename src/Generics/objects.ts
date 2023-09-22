import type {MyInterface, MyInterfaceG} from "../types";

const stringObject: MyInterface = {value: "hello world!"};
const numberObject: MyInterface = {value: 1234};
const stringArrayObject: MyInterface = {value: ["1", "2", "3"]};

// Generic Type

const stringObjectG: MyInterfaceG = {value: "hello world"};
const numberObjectG: MyInterfaceG<number> = {value: 1234};
const stringArrayObjectG: MyInterfaceG<string[]> = {value: ["1", "2", "3"]};
const booleanObjectG: MyInterfaceG<boolean> = {value: false};
