const fs = require('fs');
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2);

const [name, github, profession] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github, profession), err => {
  if (err) throw err;

  console.log('Portfolio completed. Checkout index.html')
});

// node app 'Adrian' 'isaiasqb' 'Web Developer'
