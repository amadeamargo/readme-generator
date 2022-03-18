// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('.')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: 'input',
        message: "What is the title of your repository?",
        name: "repository title"
    },
    {
        type: 'input',
        message: "Please give a brief description of your application?",
        name: "description"
    },
    {
        type: 'input',
        message: "Who are the contributors of this application?",
        name: "contributors"
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    console.log(markdown)
    
    fs.writeToFile(fileName, markdown, (err) => 
        err ? console.error("Unable to write README file") : console.log ("Succesfully wrote README file0")
    )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
