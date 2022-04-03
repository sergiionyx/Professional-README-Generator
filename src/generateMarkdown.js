// FUNCTION THAT RETURNS A LICENSE BADGE OR EMPTY STRING(IN CASE IF NO LICANSE)
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
  else if (license === "Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  }
  else if (license === "I do not want to choose a license") {
    return ""
  }
};

// FUNCTION THAT RETURNS A LICENSE SECTION OF README OR EMPTY STRING(IN CASE IF NO LICANSE)
function renderLicenseSection(license) {

  if (license) {
    return `## License

${renderLicenseLink(license)}`
  }
  else {
    return ""
  }
};

// FUNCTION THAT RETURNS A BADGE OR EMPTY STRING(IN CASE IF NO BADGE)
function renderBadges(confirmBadges, badges) {
  if (confirmBadges) {
    return `## Badges

${badges}`
  }
  else {
    return ""
  }
};

// FUNCTION THAT RETURNS A BADGE OR EMPTY STRING(IN CASE IF NO FEATURES)
function renderFeatures(confirmFeatures, features) {
  if (confirmFeatures) {
    return `## Features

${features}`
  }
  else {
    return ""
  }
};

// FUNCTION THAT RETURNS A BADGE OR EMPTY STRING(IN CASE IF NO CONTRIBUTIONS)
function renderContribute(confirmContribute, contribute) {
  if (confirmContribute) {
    return `## Contribute

${contribute}`
  }
  else {
    return ""
  }
};

// FUNCTION THAT RETURNS A BADGE OR EMPTY STRING(IN CASE IF NO TESTS)
function renderTests(confirmTests, tests) {
  if (confirmTests) {
    return `## Tests
    
${tests}`
  }
  else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
