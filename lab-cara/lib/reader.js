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
      return callback(fileBuffer.toString('utf8', 0));
    })
};

