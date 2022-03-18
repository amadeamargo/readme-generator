function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Demo:
  ${data.demo}

  ## Further Development:
  ${data.development}

  ## Contributors:
  ${data.contributors}

  ## Further Inquiries:
  For any questions, feel free to reach me at ${data.email} or check out my GitHub profile (${data.github})

`;
}

module.exports = generateMarkdown;
