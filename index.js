#! /usr/bin/env node
import inquirer from "inquirer";
const input = await inquirer.prompt([
    { message: "Enter first number ", type: "number", name: "FirstNumber" },
    { message: "Enter Second number", type: "number ", name: "SecondNumber" },
    {
        message: "Select one of the operator to perform Operation ",
        type: "list",
        name: "operation",
        choices: ["Addition ", "Subtraction", "Multiplication", "Division"],
    },
]);
if (input.operation === "Addition") {
    console.log(input.FirstNumber + input.SecondNumber);
}
else if (input.operation === "Subtraction") {
    console.log(input.FirstNumber - input.SecondNumber);
}
else if (input.operation === "Multiplication") {
    console.log(input.FirstNumber * input.SecondNumber);
}
else if (input.operation === "Division") {
    console.log(input.FirstNumber / input.SecondNumber);
}
else {
    console.log("no opertor is selected ");
}
