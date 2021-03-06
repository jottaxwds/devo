/**
 * Recursive checks head tail of given array to find palindrom
 * @param {String} head  first value of array to be checked
 * @param {String} tail last value of array to be checked
 * @param {Array} item array containing 1 character on each position
 * @returns {Boolean} both are equal ? true : false
 */
const isPalindrom = (head, tail, item) => {
  if (item.length > 1) isPalindrom(item.shift(), item.pop(), item);
  return head === tail;
};

/**
 * Modify given input to upper case and remove diacritics & accents
 * @param {String} input string to be normalized
 */
const normalizeInput = input =>
  input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();

/**
 * Method to check if a provided string is a palindrom or not
 * @param {String} valueToCheck text to be checked
 * @returns {Boolean} is palindrom ? true : false
 */
const checkIfPalindrom = valueToCheck => {
  if (typeof valueToCheck === 'string' && valueToCheck !== '') {
    let arrayToCheck = normalizeInput(valueToCheck).split('');
    return isPalindrom(arrayToCheck.shift(), arrayToCheck.pop(), arrayToCheck);
  } else {
    return false;
  }
};

module.exports = { checkIfPalindrom };
