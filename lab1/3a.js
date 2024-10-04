
//a) Create an array of strings.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//It receives a string as a parameter called task.It adds the task to the array.

let addTask = (task) => {
    fruits.push(task);
    console.log("added " + task + " to array");
    return fruits.length;
}
//lists all tasks and iterates over the tasks and prints them to console
addTask("kiwi");

fruits.forEach((item) => {
    return console.log(item)
})

//creates delete task function that removes a string from the array and prints to console
let deleteTask = (task) => {
    let index = fruits.indexOf(task);
    fruits.splice(index, 1);

    console.log("Task " + task + " Was deleted");
    return fruits.length;
    
}
console.log(deleteTask("Banana"));
