const {writeFile, copyFile} = require('./utils/generate-site')
const dummyData = require('./utils/dummy-data')
const generatePage = require('./src/page-template.js')


writeFile(generatePage(dummyData))
.then(data => {
  console.log(data);
  return copyFile()
})
.then(data => {
  console.log(data);
  console.log(`HTML generated and CSS file copied!`);
})
.catch(err => {
  console.log(err);
});
