describe("Pizza", function (){
  it("creates a pizza object to store input properties", function (){
    var testPizza = new Pizza("large","cheese");
    expect(testPizza.toppings).to.equal("cheese");
    expect(testPizza.amount).to.equal("large");
  });

  it("returns the base price of the pizza", function() {
    var testPizza = new Pizza("cheese", "large");
    expect(testPizza.price).to.equal(14);
  });

  it("will add 2 to the base price for each additional topping selected", function (){
    var testPizza = new Pizza();
    testPizza.extraToppings = ["pepperoni", "sausage", "olives", "garlic"];
    expect(testPizza.newPrice()).to.equal(16);
  });
});



//   var testPizza = new Pizza ()
