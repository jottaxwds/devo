const { findKComplementary } = require('../kcomplementary');
describe('kcomplementary unit test', () => {
  const arrExample = [1, 3, -1, 6, 10, 9, 4, 32, 12, 7, 1, 20, 14];

  it('Returns k-complementary pairs giving K value and array', () => {
    const expectedOutput = [ { A: 1, B: 1 }, { A: 3, B: 7 } ];
    const output = findKComplementary(4, arrExample);
    expect(output).toEqual(expectedOutput);
  });

  it("Returns empty array if no k-complementary pairs was found", () => {
    const expectedOutput = [];
    const output = findKComplementary(400, arrExample);
    expect(output).toEqual(expectedOutput);
  });
  
  it("Returns empty array if empty array is provided", () => {
    const expectedOutput = [];
    const output = findKComplementary(400, []);
    expect(output).toEqual(expectedOutput);
  });

  it("Returns empty array if not k-value is provided", () => {
    const expectedOutput = [];
    const output = findKComplementary(arrExample);
    expect(output).toEqual(expectedOutput);
  });

  it("Retursn empty array if not array is provided", () => {
    const expectedOutput = [];
    const output = findKComplementary(400);
    expect(output).toEqual(expectedOutput);
  });

  it("Returns empty array if no k-value and array is provided", () => {
    const expectedOutput = [];
    const output = findKComplementary(400);
    expect(output).toEqual(expectedOutput);
  });

});
