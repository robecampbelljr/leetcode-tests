const expect = chai.expect;

describe('needle-haystack.js', function() {
  let haystacks = ['sadbutsad', 'leetcode'];
  let needles =['sad', 'leeto'];
  let answers = [0, -1];

  haystacks.forEach(function(haystack, index) {
    let needle = needles[index];
    let answer = answers[index];

    describe(`Haystack: ${haystack} Needle: ${needle}`, function() {
      it('should return a number', function() {
        expect(typeof(strStr(haystack, needle))).to.equal('number');
      })
      it(`should return the proper result`, function() {
        expect(strStr(haystack, needle)).to.equal(answer);
      })
    })
  })
})