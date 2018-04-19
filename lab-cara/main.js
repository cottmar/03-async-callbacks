'use strict';

const reader = require('./lib/reader');

const georgiaPath = `${__dirname}/data/georgia.txt`;
const missouriPath = `${__dirname}/data/missouri.txt`;
const washingtonPath = `${__dirname}/data/washington.txt`;

const dataFiles = [georgiaPath, missouriPath, washingtonPath];
const results = [];

const readDataFilesArrayAsync = (dataFiles, currentIndex, callback) => {
  if (currentIndex >= dataFiles.length) {
    return callback();
  }
  const currentFilePath = dataFiles[currentIndex];
  try {
    return reader.readDataFilesAsync(currentFilePath, (file) => {
      results.push(file);
      readDataFilesArrayAsync(dataFiles, currentIndex + 1, callback);
    });
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

readDataFilesArrayAsync(dataFiles, 0, () => console.log(results));
