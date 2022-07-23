// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.projectTitle}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description
    ${data.description}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  Reach out with any questions you may have to: ${answers.email}

  ## License
  This applicatinos uses the ${data.license} license.

`;
}

module.exports = generateMarkdown;
