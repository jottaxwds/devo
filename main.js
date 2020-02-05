/**
 * Palindrom example
 */
const { checkIfPalindrom } = require('./t1/checkIfPalindrom');
console.log("Checking if 'RADAR' is a palindrom...");
console.log('Result ->', checkIfPalindrom('RADAR'));

console.log(' ------------------------------ ');
/**
 * K-Complementary example
 */
const { findKComplementary } = require('./t2/kcomplementary');
const arrExample = [1, 3, 3, 1, -1, 6, 10, 9, 4, 32, 12, 7, 1, 20, 14];
console.log(
  'Checking K-Complementary for KValue = 7 and given array ->',
  arrExample
);
console.log('Result ->', findKComplementary(4, arrExample));
