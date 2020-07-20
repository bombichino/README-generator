var fs = require("fs");
var path = require("path");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var api = require("./utils/api");
// var prepend = require("prepend-file");
// var innerText = "";

var questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project we are dealing with today?",
  },
  {
    type: "input",
    name: "URL",
    message: "What is the URL of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please briefly describe your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "install",
    message: "What command should be used to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "Do you have any instructions for using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Do you have any instructions for contributing to the repo?",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// the api seems irrelevant - checked with the master for the project, and this is also true. it would be useful for getting the image- must return for this later.

// function init() {
//   inquirer
//     .prompt(questions)
//     .then((answers) => {
//       console.log(answers);
//       console.log(answers.username);

//       return api.getUser(answers.username);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

init();
