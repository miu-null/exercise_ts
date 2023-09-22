import {IQueue} from "../types";

class Queue<T> implements IQueue<T> {
    private storage: T[] = [];
    constructor(private capacity = 4) {}

    enqueue(item: T): number {
        if (this.storage.length === this.capacity) {
            throw new Error("Queue is full ");
        }
        return this.storage.push(item);
    }
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("there is nothing to delete");
        }
        return this.storage.shift();
    }
    peek(): T | undefined {
        return this.storage[0];
    }
    isEmpty(): boolean {
        return this.storage.length === 0;
    }
}

const stringQueue = new Queue<string>();

stringQueue.enqueue("hello");
stringQueue.enqueue("world");

console.log(stringQueue);
