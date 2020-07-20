function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

${data.title} licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `
# ${data.title}
${data.license}
${data.github}
${data.title}


## Project Description

${data.description}

## Table of Contents 

* [#Installation]

* [#Usage]

* [#License]

* [#Contributing]

* [#Tests]

* [#Questions]

## Installation

To install necessary dependencies, run the following command:

${data.install}

## Usage

|
${data.usage}
|

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

|
${data.test}
|

## Questions

If you have any questions, please reach out directly at ${data.email}

`;
}

module.exports = generateMarkdown;
