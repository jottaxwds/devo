const { checkIfPalindrom } = require('../checkIfPalindrom');

describe('palindrom unit test', () => {
  it('Returns true if given string is palindrom with odd number of characters', () => {
    const input = 'RADAR';
    expect(checkIfPalindrom(input)).toBe(true);
  });
  
  it('Returns true if given string is palindrom with a even number of characters', () => {
    const input = 'RADDAR';
    expect(checkIfPalindrom(input)).toBe(true);
  });

  it('Returns false if given string is not palindrom', () => {
    const input = 'RODABALLO';
    expect(checkIfPalindrom(input)).toBe(false);
  });

  it('Returns true if given strings is a palindrom with accents, diacritics and symbols - odd number of characters', () => {
    const input = 'RäD-.-dÁr';
    expect(checkIfPalindrom(input)).toBe(true);
  });

  it('Returns true if given strings is a palindrom with accents, diacritics and symbols - even number of characters', () => {
    const input = 'RäD--dÁr';
    expect(checkIfPalindrom(input)).toBe(true);
  });

  it('Returns false if given string is empty', () => {
    const input = '';
    expect(checkIfPalindrom(input)).toBe(false);
  });

  it('Returns false if given input is not a string', () => {
    const input = 234;
    expect(checkIfPalindrom(input)).toBe(false);
  });
});
