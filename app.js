var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "employeeName"
        },
        {
            type: "input",
            message: "What is your id number?",
            name: "idNumber"
        },
        {
            type: "list",
            message: "What is your job title?",
            name: "jobTitle",
            choices: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ])
    .then(function (response) {
        if (response.jobTitle === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "githubUsername"
                }
            ]).then(function (res) {
                response.githubUsername = res.githubUsername
                console.log(response)
            })
        } else if (response.jobTitle === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your Office Number?",
                    name: "officeNumber"
                }
            ]).then(function (res) {
                response.officeNumber = res.officeNumber
                console.log(response)
            })
        } else if (response.jobTitle === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What school do/did you attend?",
                    name: "school"
                }
            ]).then(function (res) {
                response.school = res.school
                console.log(response)
            })
        }
    });
