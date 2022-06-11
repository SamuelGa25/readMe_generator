
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  Project is licensed under
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
  ## Builth With
  ${data.languages}
  ## Contribution 
  ${data.contribution}

  ## Contact Information:
  - UserName: [${data.username}]
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]


`;
}

module.exports = generateMarkdown;
