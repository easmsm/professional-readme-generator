// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
//including path to try to resolve an error
const path = require ("path");

// TODO: Create an array of questions for user input
// want to come back and add validation
const questions = [
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
        name: 'yourname',
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
      {
        type: 'list',
        name: 'license',
        message: 'Please provide the license for this project',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
      },

  ];

// const promptUser = () => {
//   return inquirer.prompt(questions)
// }

// promptUser()
// .then(readmeAnswers => {
//    console.log(readmeAnswers)
//    const markdown = generateMarkdown(readmeAnswers)
//    writeToFile(markdown)
// })

// // TODO: Create a function to write README file
// // function writeToFile('ReadMe.md', mark) {}
// function writeToFile(markdown) {
//   fs.writeFile('generated-README.md', markdown, err => {
//       if (err) {
//         console.error(err);
//       }
//       console.log("file written successfully")
//     });
//   }

function writeToFile (fileName, data) {
  return fs.writeFileSync (path.join(process.cwd(),"/dist", fileName), data)
}


// TODO: Create a function to write README file
function init () {
   inquirer.prompt(questions)
   .then((inquirerResponse, err) => {
     if (err) console.log(err)
       console.log("Making ReadMe");
       writeToFile("generated-README.md", generateMarkdown(inquirerResponse));
   })
}

init();