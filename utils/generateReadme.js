const fs = require('fs');

// CREATE A README.MD FILE AND SAVE IT TO "DIST" FOLDER IN MAIN FOLDER
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        // in case of error reject the error
        if (err) {
          reject(err);
          return;
        }
        // in case if writing of file complete show the corresponding message
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  module.exports = writeFile;