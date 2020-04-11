import { getDateTime, addAll } from "./utils.js";

enum ToDoTypes {
    SIMPLE = 'simple',
    COMPLEX = 'complex',
}

console.log(`>>`, ToDoTypes.SIMPLE);
console.log(`>>`, ToDoTypes.COMPLEX, addAll(1,2,3,4,5,6,7,8));

const setDateTime = () => {
    const {date, time} = getDateTime();
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
}

setDateTime();
setInterval(setDateTime, 1000);