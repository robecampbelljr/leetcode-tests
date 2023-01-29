describe('Snakes and Ladders', function () {

  let boardList = [[[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]], [[-1,-1],[-1,3]]];
  let answerList = [4, 1];

  let methods = ['pop', 'push', 'shift', 'unshift'];
  let popSpy = chai.spy.on(boardList[0], 'pop');
  let pushSpy = chai.spy.on(boardList[0], 'push');
  let shiftSpy = chai.spy.on(boardList[0], 'shift');
  let unshiftSpy = chai.spy.on(boardList[0], 'unshift');

  it('should not mutate board', function () {
    snakesAndLadders(boardList[0]);
    expect(popSpy).to.be.spy;
    expect(popSpy).to.not.be.called();
    expect(pushSpy).to.be.spy;
    expect(pushSpy).to.not.be.called();
    expect(shiftSpy).to.be.spy;
    expect(shiftSpy).to.not.be.called();
    expect(unshiftSpy).to.be.spy;
    expect(unshiftSpy).to.not.be.called();
  })

  it('should return a number', function () {
    expect(typeof(snakesAndLadders(boardList[0]))).to.equal('number');
  });

  boardList.forEach((board, index) => {
    it(`should return minimum number of steps to get to end for board #${index+1}`, () => {
      expect(snakesAndLadders(board)).to.equal(answerList[index]);
    })
  })

});