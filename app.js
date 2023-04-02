const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github, profession);

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio completed. Checkout index.html')
// });

// node app 'Adrian' 'isaiasqb' 'Web Developer'


const promptUserQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'profession',
      message: 'What is your current job title?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};

const promptProjectQuestions = (portfolioData) => {
  // do not initialize the array to an empty value at every new run or it will erase all the previous project data.
  //this array will hold all the projects info every time the user adds a new project
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  console.log(`
  ==================
  Add a New Project
  ==================
  `);

  return inquirer.prompt([
    {
      type: "input",
      name: 'name',
      message: 'What is the name of this proiject?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe the project (required)'
    },
    {
      type: 'checkbox',
      name: 'language',
      message: 'Which features and languages were used to build this project?',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Git Projects', 'OOP']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Please include the link to the project (required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to have this project in the featured section?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another Project?',
      default: false
    },
  ]).then(projectData => {
    portfolioData.projects.push(projectData);

    //call the project questions once again if the user selected confirmAddProject
    if(projectData.confirmAddProject) {
      return promptProjectQuestions(portfolioData);
    } else {
      return portfolioData
    }
  });
};

//we're calling a function that returns the result of inquire.prompt, which is a Promise
promptUserQuestions()
  // .then(answers => console.log(answers))
  .then(promptProjectQuestions)  //no double brackets needed here
  .then(projectAnswers => console.log(projectAnswers));