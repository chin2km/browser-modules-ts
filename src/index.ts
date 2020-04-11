import { addAll } from "./utils";

enum ToDoTypes {
    SIMPLE = 'simple',
    COMPLEX = 'complex',
}

// tslint:disable-next-line: no-console
console.log(`>>`, ToDoTypes.SIMPLE);

setTimeout(() => {
    // tslint:disable-next-line: no-console
    const x = ToDoTypes.COMPLEX
    console.log(`>>`, x, addAll(1,2,3));
}, 1000)