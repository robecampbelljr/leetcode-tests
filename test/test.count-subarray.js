const expect = chai.expect;

describe('count-subarray.js', function() {
  let testCases = [[1,3,5,2,7,5], [1,1,1,1], [35054,398719,945315,945315,820417,945315,35054,945315,171832,945315,35054,109750,790964,441974,552913]];
  let minCases = [1, 1, 35054];
  let maxCases = [5, 1, 945315];
  let testAnswers = [2, 10, 81];

  it('should return a number', function() {
    expect(typeof(countSubarrays([], 1, 1))).to.equal('number');
  })

  testCases.forEach(function(test, index) {
    it(`should return '${testAnswers[index]}' for test set '${JSON.stringify(test)}'`, function() {
      expect(countSubarrays(test, minCases[index], maxCases[index])).to.equal(testAnswers[index])
    })
  })
})