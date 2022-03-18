const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('.')

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
        message: "What licenses does your application have?",
        name: "license"
    },
    {
        type: 'input',
        message: "Who are the contributors of this application?",
        name: "contributors"
    }
]

function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    console.log(markdown)
    
    fs.writeToFile(fileName, markdown, (err) => 
        err ? console.error("Unable to write README file") : console.log ("Succesfully wrote README file0")
    )
}

function init() {
    inquirer.prompt (questions)
    .then ((data) => {
        writeToFile("README.me", data)
    })
}

init();
