const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
        }
    ])
}