function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }

  const licenseBadges = {
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    GPLv3: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-green.svg",
  };

  return `![License](${licenseBadges[license]})`;
}

function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }

  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
  };

  return `[${license}](${licenseLinks[license]})`;
}

function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }

  return `This project is licensed under the ${renderLicenseLink(
    license
  )} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

## License

${renderLicenseSection(data.license)}

## Questions

For additional questions, you can reach me through my [GitHub profile](https://github.com/${
    data.githubUsername
  }) or by email at ${data.email}.
`;
}

module.exports = generateMarkdown;
