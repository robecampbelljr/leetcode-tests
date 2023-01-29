const sandbox = chai.spy.sandbox();

describe('Testing Ground', function () {

  describe('Test Testing Ground', function () {
    let array = [1, 2, 3];
    let methods = ['push', 'pop', 'shift', 'unshift'];
    let spy = chai.spy.on(array, 'push');

    it('should be a spy', function () {
      chai.expect(spy).to.be.spy;
    });

    describe('should detect when the spy has been activated...', function () {
      arrayTest(array)

      it('...with a specific value', function () {
        chai.expect(spy).to.be.called.with(1);
      });
      it('...without a specific value', function () {
        chai.expect(spy).to.be.called;
        // AND
        chai.expect(spy).to.not.be.called.with(2);
        chai.expect(spy).to.not.be.called.with(3);
        chai.expect(spy).to.not.be.called.with(4);
      });
    });
  });
});