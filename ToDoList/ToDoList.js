const fs = require('fs');
let tasks = [];
if(fs.existsSync("tasks.json")){
    tasks = JSON.parse(fs.readFileSync("tasks.json"),"utf8");
}
function ToDoList() {    
    console.log("--------------------------------------------------------------------");
    console.log("                            TODO LIST");
    console.log("--------------------------------------------------------------------");
    function Home(){
    console.log("1. Add a task");
    console.log("2. Delete a task");
    console.log("3. Display all tasks");
    console.log("4. Exit");
    console.log("--------------------------------------------------------------------");
      }
    Home();
    
    const prompt = require('prompt-sync')();
     let choice = prompt("Enter your choice: ");
     switch (choice) {
        case "1":
            addtask();
            setTimeout(tohome, 2000);
            break;
        case "2":
            deletetask();
            setTimeout(tohome, 2000);
            break;      
        case "3":
            displaytasks();
            setTimeout(tohome, 2000);
            break;      
        
        case "4":
            console.log("Exiting the program");
            break;
    
        default:
            console.log("Invalid choice. Please enter a valid option.");
            break;
    }
    function addtask() {
        console.log("Enter the task you want to add: ");
        let task = prompt();
        tasks.push(task);
        console.log("Task added Successfully" )
        savetasks();
    }
    
    function deletetask() {
        console.log("Enter the index of the task you want to delete: ");
        let index = prompt();
        if (index-1 >= 0 && index-1 < tasks.length) {
            tasks.splice(index-1, 1);
            console.log("Task deleted successfully");
        } else {
            console.log("Invalid task index");
        }
    }
    function displaytasks() {
        console.log("Your tasks are: ");
        for (let i = 0; i < tasks.length; i++) {
            console.log(i+1 + ": " + tasks[i]);
        }
    }
    function savetasks(){
        fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
    }

    function tohome() {
        console.log("--------------------------------------------------------------------");
        console.log("want to go home?(y/n)");
            let goHome = prompt();
            if (goHome.toLowerCase() === "y") {
               ToDoList();
            }
            
    }
}
ToDoList();