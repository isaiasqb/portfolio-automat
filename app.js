const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github, profession);

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio completed. Checkout index.html')
// });

// node app 'Adrian' 'isaiasqb' 'Web Developer'

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: `▶  What is your name?`
    }
  ])
  .then(answers => console.log(answers));


