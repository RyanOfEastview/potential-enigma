// TODO: Include packages needed for this application
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
// const questions = [];
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle', 
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'If applicable, describe the installation process.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the purpose of the project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Chose the appropriate license for this project: ',
            choices: [
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
            ]
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address: '
        }
    ]);
}

// asynchronous node.js util.promisify function
async function init() {
    try {
        //ask questions, get responses
        const data = await promptUser();
        const generateContent = generateReadme(data);
        //write new README file to the dist folder
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote README.md.  Look in dist folder to view');
    }   catch(err) {
        console.log(err);
    }
}

init();