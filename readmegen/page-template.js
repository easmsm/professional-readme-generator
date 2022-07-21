class MarkDown {
    static generateReadme (answers) {
        return ``

    # ${answers.title}
    
    ##  Table of Contents

    - [Project Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Author Name](#Name)
    - [Author Email](#Email)
    - [Author GitHub](#Github)
    - [License](#License)


    ## Description
    
        ${answers.description}


    ## Installation

        ${answers.installation}


    ## Usage

        ${answers.usage}


    ## Contributing

        ${answers.contributing}

    ## Tests

        ${answers.tests}


    ## Contact Information

    ### Name 

        ${answers.name}

    ### Email

        ${answers.email}

    ### Github

        ${answers.github}

    ### License

        ${answers.license}

    }
}

module.exports = MarkDown