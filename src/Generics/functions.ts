import {Status} from "../types";
import type {User, Order} from "../types";

function getData<T>(data: T): T {
    return data;
}
console.log(getData<string>("string data"));
console.log(getData<number>(1));
console.log(getData<User>({email: "email@email.com", name: "katie"}));
console.log(getData<string[]>(["string", "data"]));
console.log(getData<string[]>([]));

const orders: Order[] = Object.values<Status>(Status).map((status, index) => {
    return {
        buyer: `buyer #${index}`,
        orderStatus: status,
    };
});

console.log(orders);
