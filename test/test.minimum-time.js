const expect = chai.expect;

describe('minimum-time.js', function() {
  let time = [[1,2,3], [2]];
  let totalTrips = [5, 1];
  let answers = [3, 2];

  it('should return a number', function() {
    expect(typeof(minimumTime([], 0))).to.equal('number')
  })

  time.forEach(function(testCase, index) {
    it(`should return: '${answers[index]}' for test case: '${testCase}' minTrips: ${totalTrips[index]}`, function() {
      expect(minimumTime(testCase, totalTrips[index])).to.equal(answers[index])
    })
  })
})