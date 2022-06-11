
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  Project is licensed under the ${data.license} license
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ##Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Languages](#languages)
  -[Contribution](#contribution)
  -[Contact Info](#contact-info)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Builth With
  ${data.languages}
  ## contribution 
  ${data.contribution}

  ##Contact Information:
  













`;
}

module.exports = generateMarkdown;
