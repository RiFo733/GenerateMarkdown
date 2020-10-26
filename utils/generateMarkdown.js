// function passing in license as an argument
// validate license exist
// return ![Github license] (https://img.sheilds.io/badge/license- ROUTE HERE -blue.svg)
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

function renderLicenseLink(license){
  if (license !== "None"){
    return '\n* [license](#license)\n'
  }
}

function renderLicenseSection(license){
  if (license !== "None"){
    return (`## license
    this repo is licensed under ${license} license`
    )
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.github}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Instatllation
Use following commands to install dependencies:

${data.install}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribute}

## Tests
Used the following command to run tests:
...
${data.test}
...

## Questions
  Github Name: ${data.github}
  E-mail: ${data.email}

  ${data.projectName}
`;
}

module.exports = generateMarkdown;
