export enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
}

export enum Direction {
    up = "Up",
    down = "Down",
    left = "Left",
    right = "Right",
}

export interface thingsInLife {
    colorOfChair: Color;
    arrow: Direction;
}

export interface MyInterface {
    value: string | number | Array<string>;
}

export interface MyInterfaceG<T = string> {
    value: T;
}

export type User = {
    email: string;
    name: string;
};

export enum Status {
    Initiated = "Initiated",
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
}

export interface Order {
    buyer: string;
    orderStatus: Status;
}

export interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

export interface IQueue<T> {
    enqueue(item: T): number;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
}
