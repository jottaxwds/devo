/**
 * Returns K-Complementary pairs for given K
 * @param {Integer} kvalue
 * @param {Array} arrValues
 * @returns {Array} {A: ---, B: ---} as the pairs that matches the K complementary value
 */
const findKComplementary = (kvalue, arrValues) => {
  let output = [];
  // To acumulate used values to avoid repeating:
  let values = [];
  if (validateInputs(kvalue, arrValues)) {
    for (let i = 0; i <= arrValues.length; i++) {
      for (let j = i; j < arrValues.length - 1; j++) {
        let valueA = arrValues[i];
        let valueB = arrValues[j];
        if (
          valueA + valueB == kvalue &&
          !values.includes(valueA) &&
          !values.includes(valueB)
        ) {
          values.push(valueA);
          values.push(valueB);
          output.push({ A: arrValues[i], B: arrValues[j] });
        }
      }
    }
  }
  return output;
};

/**
 * Validates input for given k-complementary function
 * @param {Integer} kv
 * @param {Array} arr
 */
const validateInputs = (kv, arr) => {
  let valid = true;
  valid = validateArrayInput(arr) && validateKvalue(kv);
  return valid;
};

/**
 * Validates KV is a valid number.
 * @param {Integer} kv
 * @returns {boolean}
 */
const validateKvalue = kv => {
  let valid = true;
  if (kv == null || typeof kv !== 'number') {
    valid = false;
  }

  return valid;
};

/**
 * Validates array of integers is valid.
 * @param {Array} arr
 * @returns {boolean}
 */
const validateArrayInput = arr => {
  let valid = true;
  if (arr == null || typeof arr !== 'object' || !arr.length) {
    valid = false;
  } else {
    for (let i = 0; i < arr.lenght; i++) {
      if (typeof arr[i] !== number) {
        valid = false;
        break;
      }
    }
  }

  return valid;
};

module.exports = { findKComplementary };
