describe("Pizza", function() {
  it("creates a new Pizza object with properties for name, size (aka amount), and topping numbers", function () {
      var testPizza = new Pizza("regular",["pepperoni", "sausage", "olives", "garlic"]);
      expect(testPizza.amount).to.equal("regular");
      expect(testPizza.toppings).to.eql(["pepperoni", "sausage", "olives", "garlic"]);
    });

  it("adds a method to calculate pizza price for any pizza", function() {
    var testPizza = new Pizza("regular",["pepperoni", "sausage", "olives", "garlic"]);
    expect(testPizza.price()).to.equal(18);
  });
});
