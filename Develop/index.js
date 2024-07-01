const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter the contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "GPLv3", "Apache 2.0", "None"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`README.md has been generated successfully!`);
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

init();
