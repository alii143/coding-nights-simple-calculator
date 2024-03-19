import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
  { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);

//conditional statement

if (answer.operator === "ADDITION") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "SUBTRACTION") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "MULTIPLICATION") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "DIVISION") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  ("please select valid operator");
}
