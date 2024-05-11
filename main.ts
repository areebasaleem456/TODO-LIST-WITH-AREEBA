#! /usr/bin/env node

import inquirer from "inquirer"
let todoList =[];
let conditions=true

console.log("\n\t Welcome to Areeba TODO-APP\n");

while(conditions){
    let addTask=await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your task here:"
        }
    ])
    todoList.push(addTask.task);
    console.log(`${addTask.task} added in your list.`);

   let moreTask=await inquirer.prompt([
    {
        name:"addmore",
        type:"confirm",
        message:"Do you want to add more tasks?",
        default:"false"
    }
   ])
   conditions=moreTask.addmore
};
console.log(`Your updated todo List:${todoList}`)
    

