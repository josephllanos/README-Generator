// Function to return the license badge based on the selected license
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function to return the license link based on the selected license
function renderLicenseLink(license) {
  if (!license) return '';
  const licenses = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
  };
  return `[${license}](${licenses[license]})`;
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
This project is licensed under the ${license} license.`;
}

// Function to generate the markdown for the README file
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;

}

export default generateMarkdown;
