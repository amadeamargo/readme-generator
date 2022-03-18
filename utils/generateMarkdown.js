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
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Demo:
  ${data.demo}

  ## Licenses:
  ${data.license}

  ## Further Development:
  ${data.development}

  ## Contributors:
  ${data.contributors}

  ## Further Inquiries:
  For any questions, feel free to reach me at ${data.email} or check out my GitHub profile (${data.github})

`;
}

module.exports = generateMarkdown;
