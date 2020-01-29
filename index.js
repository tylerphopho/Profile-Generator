const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./generateHTML");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function init() {
};

function promptUser() {
    const username = inquirer.prompt({
        type: "input",
        message: "What is your GitHub username?",
        name: "username" 
    })
     return username;
}

function promptColor() {
    const color = inquirer.prompt({
        type: "list",
        message: "What is your favorite color?",
        choices: ["Red", "Blue", "Green", "Yellow",]
    })
    return color;
}

function gitUser(username) {
    const github = axios.get(`https://api.github.com/users/${username}`);
    return github
}


promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
