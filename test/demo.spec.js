describe("Demo test", function() {

  var app = {
    bar: 'baz',
    foo: [0, 1, 2, 3, 5, 8, 13]
  };

  it("Bar is a baz", () => {
    expect(app.bar).to.be.equal('baz');
  });

  it("7 is lucky number", () => {
    expect(app.foo).to.have.lengthOf(7);
  });

  it("Foo should have first 6 fibonacci numbers", function() {
    expect(app.foo).to.have.members([0, 1, 2, 3, 5, 8, 13]);
  });

});