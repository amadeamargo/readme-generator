function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Further Development] (#further-development)
  * [Contributors] (#contributors)
  * [Further Inquiries] (#further-inquiries)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Further Development:
  ${data.development}

  ## Contributors:
  ${data.contributors}

  ## Further Inquiries:
  For any questions, feel free to reach me at ${data.email} or check out my GitHub profile (${data.github})

`;
}

module.exports = generateMarkdown;
