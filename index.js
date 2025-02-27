import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
import fs from 'fs';

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, 'utf-8');
  console.log(`Successfully created ${fileName}`);
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate markdown based on user responses
      const readmeContent = generateMarkdown(answers);
      // Write to README.md file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Initialize the app
init();
