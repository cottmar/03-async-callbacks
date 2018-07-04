'use strict';

const fs = require('fs');

const fileReader = module.exports = {};
fileReader.readDataFilesAsync = (filePath, callback) => {
  console.log(`Reading ${filePath}`); 
  return fs.readFile(
    filePath,
    (error, fileBuffer) => {
      if (error) {
        throw error;
      }
      return callback(null, fileBuffer.toString('utf8', 0));
    })
};


//CODE REVIEW
'use strict'

const fs = require('fs');

const reader = module.exports = {};

reader.readFiles = (filePath, callback) => {
  fs.readFile(filePath[0], 'utf8', (err1, data1) => {
    if (err1) {
      return callback(err1);
    }
    callback(data1); //once we hit these, we are defining some function that is going to do something?
    return fs.readFile(filePath[1], 'utf8', (err2, data2) => {
      if (err2) {
        return callback(err2);
      }
      callback(data2);
      return fs.readFile(filePath[2], ('utf8'), (err3, data3) => {
        if (err3) {
          return callback(err3);
        }
        callback(data3);
        return undefined;
      })
    })
  });
};
