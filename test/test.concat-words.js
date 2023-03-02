describe('Concatinated Words', function() {

  let testCases = [["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"], ["cat","dog","catdog"], ["a","b","ab","abc"]];

  let testAnswers = [["catsdogcats","dogcatsdog","ratcatdogcat"], ["catdog"], ["ab"]];

  it('should return an array', function() {
    expect(Array.isArray(findAllConcatenatedWordsInADict(testCases[0]))).to.be.true;
  })


  testCases.forEach(function(test, index) {
    let testCase = findAllConcatenatedWordsInADict(test);
    let answers = testAnswers[index];
    let isSameLen = testCase.length === answers.length;
    let isSameAsAnswer = true;

    it(`should return all concatined words for test #${index+1}`, function() {

      testCase.forEach(function(concatWord, index2) {
        let i = 0;
        let answer = answers[index2];
        while(isSameAsAnswer && i < concatWord.length) {
          if (concatWord[i] !== answer[i]) {
            isSameAsAnswer = false;
          }
          i += 1;
        }
      });
      expect(Array.isArray(testCase)).to.be.true;
      expect(isSameLen).to.be.true;
      expect(isSameAsAnswer).to.be.true;
    });
  });
});