// functions specific to generating license badges, which will be called in generateMarkdown

//license badge depending on user input
function renderLicenseBadge(license) { 
    if (license !== 'no license') {
      return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
    } else {
      return ' ';
    }
  }

  function renderLicenseLink(license) {
    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }

  //in the markdown body
  function renderLicenseSection(license) {
    if (license !== 'no license') {
    return `
    ## [License](#license)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }

   //table of contents license information
   function renderLicenseTOC(license) {
    if (license !== 'no license') {
    return `
    * [License](#license)
      `;
    } else {
      return ' ';
    }
   }
  



// add Title, description, installation, usage, contributing, tests, name, email, GitHub, license
function generateMarkdown(data) {
    const { title, description, installation, usage, contributing, tests, email, github } = data;
    
    return `
        # ${title}
        
        ${renderLicenseBadge(data.license)}

    ## Table of Contents

        * [Title](#title)
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Name](#name)
        * [Contact](#contact)

    ## Description

        ${description}
    
    ## Installation

        ${installation}
    
    ## Usage

        ${usage}

    ${renderLicenseSection(data.license)}
    
    ## Contributing

        ${contributing}
    
    
    ## Tests

        ${tests}

    ## Contact

        If you have any questions, please contact me using the following links:

        ${yourname}

        [GitHub](https://github.com/${github})

        Email: ${email}
    `;
}


module.exports = generateMarkdown
