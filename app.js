// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = () => {
//     return inquirer.prompt([
       
//     ]);
// };
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
    }
    ]);
  };

promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
