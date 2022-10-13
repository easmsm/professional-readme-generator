// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('readmegen/page-template.js');
const fs = require('fs');


// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a detailed description of your project'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please describe the intended use for this project'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide a list of contributors to this project'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please describe testing for this project'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username'
    },
    
    //src for license section https://www.youtube.com/watch?v=OT63ATGrs5I
    {
        type: 'list',
        name: 'license',
        message: 'Please provide the license for this project',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
    }
  ]);
 };

 inquirer.prompt(questions).then((answers) => {
    console.log(mark);
  });


// TODO: Create a function to write README file
// function writeToFile('ReadMe.md', mark) {}

// TODO: Create a function to initialize app
function init() {
    fs.writeFile('ReadMe.md', mark);
}

// Function call to initialize app
init();
