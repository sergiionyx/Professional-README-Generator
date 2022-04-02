// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/generateMarkdown');
const writeToFile = require('./utils/generateReadme');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // TITLE OF THE PROJECT
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        // DESCRIPTION OF THE PROJECT
        {
            type: 'input',
            name: 'descr1',
            message: 'What was your motivation?(Required)',
            validate: descrInput => {
                if (descrInput) {
                    return true;
                } else {
                    console.log('Please enter your motivation!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'descr2',
            message: 'Why did you build this project?(Required)',
            validate: descrInput => {
                if (descrInput) {
                    return true;
                } else {
                    console.log('Please enter your reasons to build this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'descr3',
            message: 'What problem does it solve?(Required)',
            validate: descrInput => {
                if (descrInput) {
                    return true;
                } else {
                    console.log('Please enter what problem does it solve!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'descr4',
            message: 'What did you learn?(Required)',
            validate: descrInput => {
                if (descrInput) {
                    return true;
                } else {
                    console.log('Please enter what did you learn!');
                    return false;
                }
            }
        },

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
