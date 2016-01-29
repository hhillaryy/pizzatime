describe("Pizza", function() {
  it("creates a new Pizza object with properties for name, size (aka amount), and topping numbers", function () {
      var testPizza = new Pizza("regular",["pepperoni", "sausage", "olives", "garlic"]);
      expect(testPizza.amount).to.equal("regular");
      expect(testPizza.toppings).to.eql(["pepperoni", "sausage", "olives", "garlic"]);
    });

  it("adds a method to calculate pizza price for any pizza", function() {
    var testPizza = new Pizza("regular",["pepperoni", "sausage", "olives", "garlic"]);
    expect(testPizza.price()).to.equal(22);
  });
  it("charges $14 for a regular pizza", function (){
    var testPizza = new Pizza("regular",[]);
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $16 for a large pizza", function (){
    var testPizza = new Pizza("large",[]);
    expect(testPizza.price()).to.equal(16);
  });
  it("charges $2 per topping for a regular pizza", function() {
    var testPizza = new Pizza("regular", ["pepperoni"]);
    expect(testPizza.price()).to.equal(16);
  });
  it("charges $2.50 per topping for a large pizza", function() {
    var testPizza = new Pizza("large", ["pepperoni"]);
    expect(testPizza.price()).to.equal(18.5);
  });
});
