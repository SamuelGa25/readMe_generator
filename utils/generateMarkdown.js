
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Languages](#languages)
  - [Contribution](#contribution)
  - [Contact Info](#contact-info)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Built With
  ${data.languages}
  ## Contribution 
  ${data.contribution}

  ## Contact Information:
  - UserName: [${data.username}]
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]

  ## License
  Project is licensed under
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`;
}

module.exports = generateMarkdown;
