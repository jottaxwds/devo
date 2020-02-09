const fs = require('fs');
const path = require('path');

/**
 * Function declarations:
 */

/**
 * Returns files inside given directory:
 * @param {String} dirName
 * @returns {Array} Files found inside directory
 */
const getAllFilePathsFromDir = dirName => {
  const directoryPath = path.join(__dirname, dirName);

  let filesInDir = fs.readdirSync(directoryPath, function(err, files) {
    if (err) {
      console.log('Error ->', err);
    }
  });

  // Remove hidden files and add complete path to file:
  return filesInDir.reduce((results, file, index) => {
    if (file.charAt(0) !== '.') {
      return [...results, path.join(__dirname, dirName, file)];
    } else {
      return results;
    }
  }, []);
};

/**
 * Split all the given text by spaces to get words (including tabs and new lines)
 * @param {String} text
 * @returns {Array} text splitted in words
 */
const getWordsFromText = text => text.split(/\s+/);

/**
 * Simply count how many word ocurrences in given array
 * @param {Array} textArray
 * @param {String} term
 */
const countWordsInArray = (textArray, term) => {
  let count = 0;
  textArray.forEach(function(key) {
    key.toUpperCase() === term.toUpperCase() && count++;
  });
  return count;
};

/**
 * Get the number of times the given terms appear in the document
 *
 * @param {String} terms
 * @param {String} file
 * @param {Array} outputs
 */
const getTermFrequency = (terms, file, outputs) => {
  let fileData = fs.readFileSync(file, 'utf8', function(err, data) {
    if (err) throw err;
  });

  // Content splitted by words in Array:
  var splittedByWords = getWordsFromText(fileData);

  let count = countWordsInArray(splittedByWords, terms);
  outputs.tf.push({ tf: Math.log(1 + count), file });

  if (count !== 0) {
    outputs.idf = outputs.idf + 1;
  }
};

/**
 *
 * @param {Object} params idf, tf information for each file, files
 * @returns {Array} idf for each given file
 */
const getTfIdfInFiles = ({ idf, tf, filesInPath }) => {
  let tfIdf = [];

  tfIdf = tf.reduce((res, currentTfInfo, index) => {
    let output = {
      file: currentTfInfo.file,
      tfIdf: currentTfInfo.tf / idf
    };
    return [...res, output];
  }, []);

  return tfIdf;
};

/**
 * Main:
 */

// Args used to call the lib:
const args = process.argv.slice(2);

const dirName = args[0];
const terms = args[1];

// Get the files in the given path:
const filesInPath = getAllFilePathsFromDir(dirName);
const totalFiles = filesInPath.length;

// IDF & TF calculations output:
let outputs = { idf: 0, tf: [] };

// Update TFs for each file:
filesInPath.forEach(file => {
  getTermFrequency(terms, file, outputs);
});

// Update idf value with logarithmic calculation:
outputs.idf = Math.log(totalFiles / outputs.idf);

// Get the tfIdf for each file:
let tfIdfInFiles = getTfIdfInFiles({
  idf: outputs.idf,
  tf: outputs.tf,
  filesInPath
});

console.log('Results: ', tfIdfInFiles);

module.exports = { getAllFilePathsFromDir };
