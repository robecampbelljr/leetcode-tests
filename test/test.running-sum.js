const expect = chai.expect;

describe('Running sum of 1d Array', function() {
  let nums = [[1,2,3,4], [1,1,1,1,1], [3,1,2,10,1]];
  let results = [[1,3,6,10], [1,2,3,4,5], [3,4,6,16,17]];

  nums.forEach(function(numSet, index) {
    it(`should return the correct answer for data set ${index+1}`, function() {

      let sameLen = true;
      let sameContent = true;
      let result = runningSum(numSet);

      if (result.length !== results[index].length) {
        sameLen = false;
      }

      if (sameLen) {
        debugger;
        let i = 0;
        while (sameContent && i < result.length) {
          if (result[i] !== results[index][i]) {
            sameContent = false;
          }
          i++;
        }
      }

      expect(sameContent).to.be.true;
      expect(sameLen).to.be.true;
    })
  })

})