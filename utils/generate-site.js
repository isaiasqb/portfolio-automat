const fs = require('fs');

// create document function contextualizing it to be Promise based.
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      //if there is an error, reject the promise and send the error to the promise's catch() method
      if (err) {
        //return out of the function 
        console.log('ERROR');
        reject(err)
        return;
      }
      //if everything went well, resolve the promise and send the data tu the then() method
      resolve({
        ok: true,
        message: 'FILE CREATED'
      })
    })
  })
}


const copyFile = () => {
  return new Promise((resolve, reject)=> { 
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        console.log("Error copying the file")
        reject(err)
        return;
      }
      resolve({
        ok: true,
        message: "File copied"
      })
    })
  })
}


module.exports = {writeFile, copyFile}






