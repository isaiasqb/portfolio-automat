const {writeFile, copyFile} = require('./utils/generate-site')
const generatePage = require('./src/page-template.js')
const {userQuestions, projectQuestions} = require('./utils/inquirer-template')

userQuestions()
.then(projectQuestions)
.then(portfolioData => {
  return generatePage(portfolioData);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile()
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});


