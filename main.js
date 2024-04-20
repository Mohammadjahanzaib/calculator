import inquirer from 'inquirer';
let calculatorinputs = await inquirer.prompt([
    {
        type: "input",
        name: "firstnumber",
        message: "enter firstnumber"
    },
    {
        type: "input",
        name: "secondnumber",
        message: "enter secondnumber"
    },
    {
        type: "list",
        name: "operation",
        message: "which operation do you want to perform?",
        choices: ['addition', 'subtraction', 'multiplication', 'divide']
    },
]);
console.log(calculatorinputs.operation);
if (calculatorinputs.operation === 'addition') {
    console.log(calculatorinputs.firstnumber + calculatorinputs.secondnumber);
}
else if (calculatorinputs.operation === 'subtraction') {
    console.log(calculatorinputs.firstnumber - calculatorinputs.secondnumber);
}
else if (calculatorinputs.operation === 'multiplication') {
    console.log(calculatorinputs.firstnumber * calculatorinputs.secondnumber);
}
else if (calculatorinputs.operation === 'divide') {
    console.log(calculatorinputs.firstnumber / calculatorinputs.secondnumber);
}
