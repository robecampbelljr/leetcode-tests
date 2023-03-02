const expect = chai.expect;

describe('string-compression', function() {
  let chars1 = ["a","a","b","b","c","c","c"];
  let chars2 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
  let chars3 = ["a","b","b","c","c","b","b","b","a","a","b","b","b", "d", "b", "b"];
  let chars4 = ["a"];

  // it('should return a number', function() {
  //   expect(typeof(compress(chars1))).to.equal('number');
  // })

  it('should return correct answer for test case 1', function() {
    expect(compress(chars1)).to.equal(6)
  })

  it('should return correct answer for test case 2', function() {
    expect(compress(chars2)).to.equal(4)
  })

  it('should return correct answer for test case 3', function() {
    expect(compress(chars3)).to.equal(14)
  })

  it('should return correct answer for test case 3', function() {
    expect(compress(chars4)).to.equal(1)
  })
})