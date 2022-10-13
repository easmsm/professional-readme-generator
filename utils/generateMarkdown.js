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
    return `
        # ${data.title}
        
        ${renderLicenseBadge(data.license)}

    ## Table of Contents

        * [Title](#title)
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        ${renderLicenseTOC(data.license)}
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Name](#name)
        * [Contact](#contact)

    ## [Title](#title)

        ${data.description}
    
    ## [Installation](#installation)

        ${data.installation}
    
    ## [Usage](#usage)

        ${data.usage}

    ${renderLicenseSection(data.license)}
    
    ## [Contributing](#contributing)

        ${data.contributing}
    
    
    ## [Tests](#tests)

        ${data.tests}

    ## [Contact](#contact)

        If you have any questions, please contact me using the following links:

        ${data.name}

        [GitHub](https://github.com/${data.githubUsername})

        [Email: ${data.email}](mailto:${data.email})
    `;
}


module.exports = generateMarkdown;