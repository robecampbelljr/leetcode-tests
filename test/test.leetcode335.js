const expect = chai.expect;

describe('leetcode 339', function() {
  describe('pass the pillow', function() {
    let n = [4, 3];
    let times = [5, 2];
    let answers = [2, 3];

    answers.forEach(function(answer, index) {
      it(`should return ${answer} for test case '${index+1}'`, function() {
        expect(passThePillow(n[index], times[index])).to.equal(answer);
      })
    })
  })

  describe('kthLargestLevelSum', function() {

    let input = [[5,8,9,2,1,3,7,4,6], [1,2,null,3], [5,8,9,2,1,3,7,4,6]];
    let k = [2, 1, 2];
    let answers = [13, 3, 13];

    it(`should retirn -1 on failure`, function() {
      expect(kthLargestLevelSum([], 2)).to.equal(-1);
    })

    input.forEach(function(set, index) {
      it(`should return '${answers[index]}' for set '${JSON.stringify(set)}`, function() {
        expect(kthLargestLevelSum(set, k[index])).to.equal(answers[index])
      })
    })
  })
})