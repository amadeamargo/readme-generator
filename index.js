const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: 'input',
        message: "What is your email?",
        name: "email"
    },
    {
        type: 'input',
        message: "What is the title of your repository?",
        name: "title"
    },
    {
        type: 'input',
        message: "Please give a brief description of your application?",
        name: "description"
    },
    {
        type: 'input',
        message: "Please explain how to run the application.",
        name: "installation"
    },
    {
        type: 'input',
        message: "Who are the contributors of this application?",
        name: "contributors"
    },
    {
        type: 'input',
        message: "Please describe any plans for further development of this app.",
        name: "development"
    }
]

function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    console.log(markdown)
    
    fs.writeFile(fileName, markdown, (err) => 
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
