// PACKAGES NEEDED FOR THIS APPLICATION
const inquirer = require('inquirer');
const generateReadme = require('./src/generateMarkdown');
const writeToFile = require('./utils/generateReadme');

// QUESTIONS WITH USER INPUT
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
        // INSTALLATION INFO
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.(Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the steps required to install your project!(Required)');
                    return false;
                }
            }
        },
        // USAGE INFO
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.(Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions and examples for use!');
                    return false;
                }
            }
        },
        // CREDITS
        {
            type: 'confirm',
            name: 'credits',
            message: 'Would you like add some credits?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
            when: ({ credits }) => credits
        },
        // LICENSE
        {
            type: 'list',
            name: 'license',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.',
            choices: ['MIT', 'Mozilla', 'Unlicense', 'I do not want to choose a license']
        },
        // BADGES
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to add Badges?',
            default: false
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Provide badge here like: ![badgeName](https://badge/pass.here)',
            when: ({ confirmBadges }) => confirmBadges
        },
        // FEATURES
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like to add features?',
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: 'If your project has a lot of features, list them here.',
            when: ({ confirmFeatures }) => confirmFeatures
        },
        // CONTRIBUTIONS
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like to add info how to contribute?',
            default: false
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you would prefer.',
            when: ({ confirmContribute }) => confirmContribute
        },
        // TESTS
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add info about tests?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
            when: ({ confirmTests }) => confirmTests
        },
        // QUESTIONS(GITHUB USERNAME)
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your GitHub username.(Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!(Required)');
                    return false;
                }
            }
        },
        // QUESTIONS(EMAIL)
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.(Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!(Required)');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

questions();
