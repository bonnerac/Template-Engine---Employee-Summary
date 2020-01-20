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
            message: 'Enter another employee? ',
            default: true
        }
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
    const inputs = await collectInputs();
    console.log(inputs);
};

main();
