const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
const generateMarkdown = require ("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is your project's name?"
},{
    type: "input",
    name: "description",
    message: "Please write a description of your poject."
},{
    type: "input",
    name: "install",
    message: "What is required to install?"
},{
    type: "input",
    name: "usage",
    message: "What is the usage of your project?"
},{
    type: "list",
    name: "license",
    message: "What license does your poject have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BDS 3", "None"]
},{
    type: "input",
    name: "contribute",
    message: "What are we able to contribute?"
},{
    type: "input",
    name: "test",
    message: "What commands used to run tests?"
},{
    type: "input",
    name: "github",
    message: "What is your github username?"
},{
    type: "input",
    name: "email",
    message: "What is your e-mail address?"
}];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions) // promise (.then) function
    .then(function(inquirerResponses) {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
    // call the function writeToFile using the data that we pass (ie the inquirer responses)
}

// function call to initialize program
init();
