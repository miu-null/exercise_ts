import {IStack} from "../types";

class Stack<T> implements IStack<T> {
    private storage: T[] = [];
    constructor(private capacity = 4) {}

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw new Error("stack is full");
        }

        this.storage.push(item);
    }
    pop(): T | undefined {
        if (this.size() === 0) {
            throw new Error("there's nothing to delete");
        }
        return this.storage.pop();
    }
    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }
    size(): number {
        return this.storage.length;
    }
}

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
stringStack.push("!");

stringStack.pop();

console.log(stringStack.peek());
