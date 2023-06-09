const inquirer = require('inquirer');

const userQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log ('This answer is required');
          return false;
        }
      }
    },
    {
          type: 'input',
          name: 'profession',
          message: 'What is your current job title? (Required)',
          validate: professionInput => {
            if(professionInput) {
              return true;
            } else {
              console.log ('This answer is required');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub username: (Required)',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('This answer is required');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'confirmAbout',
          message: 'Would you like to include an "About" section with some information from you?',
          default: true
        },
        {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:',
          when: ({ confirmAbout }) => { //as parameter, we are passin an object of all of the answers given so far.
            if(confirmAbout) {
              return true;
            } else {
              return false;
            }
          }
        }
      ]);
    };
    
    const projectQuestions = (portfolioData) => {
      console.log(`
      ==================
      Add a New Project
      ==================
      `);
      
      // do not initialize the array to an empty value at every new run or it will erase all the previous project data.
      //this array will hold all the projects info every time the user adds a new project
      if (!portfolioData.projects) {
        portfolioData.projects = [];
      }
      
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
          name: 'languages',
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
          return projectQuestions(portfolioData);
        } else {
          return portfolioData
        }
      });
    };


    module.exports = {userQuestions, projectQuestions } 