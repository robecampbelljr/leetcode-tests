const expect = chai.expect;

describe('Sorting Algorithyms', function() {
  it('should sort arrays', function() {
    let unsortedNums = [2, 4, 3, 5, 1];
    let sortedNums = [1, 2, 3, 4, 5];

    expect(quickSort(unsortedNums)).to.have.lengthOf(sortedNums.length);
  })
})