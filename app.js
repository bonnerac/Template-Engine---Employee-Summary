var inquirer = require('inquirer');
const fs = require("fs")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// var Employee = require("./lib/Employee");
// var Engineer = require("./lib/Engineer");
// var Intern = require("./lib/Intern");
// var Manager = require("./lib/Manager");

const collectInputs = async (inputs = []) => {
    const prompts = [
        {
            type: "input",
            message: "What is the employee's name?",
            name: "employeeName"
        },
        {
            type: "input",
            message: "What is the employee's id number?",
            name: "idNumber"
        },
        {
            type: "list",
            message: "What is the employee's job title?",
            name: "jobTitle",
            choices: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number:",
            when: (answers) => answers.jobTitle === 'Manager'
        },
        {
            type: "input",
            message: "What school does/did the intern attend?",
            name: "school",
            when: (answers) => answers.jobTitle === 'Intern'
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "githubUsername",
            when: (answers) => answers.jobTitle === 'Engineer'
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'Enter another employee?',
            default: true
        }
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

const writeHTML = async () => {
    const inputs = await collectInputs();
    for (i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        const employeeHTML = `<div class="card">
        <div class="card-body">
          ${JSON.stringify(inputs[i])}
        </div>
        </div>`
        const html = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>Document</title>
        </head>
        
        <body>
            ${employeeHTML}
        </body>
        
        </html>`
        writeFileAsync("index.html", html)
    }


};

writeHTML();
