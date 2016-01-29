describe("Pizza", function (){
  it("creates a pizza object to store input properties as indicated", function (){
    var testPizza = new Pizza("large","cheese",["pepperoni", "sausage", "olives", "garlic"]);
    expect(testPizza.topping).to.equal("cheese");
    expect(testPizza.amount).to.equal("large");
    expect(testPizza.extraToppings).to.eql(["pepperoni", "sausage", "olives", "garlic"]);
  });

  it("returns the base price of the pizza", function() {
    var testPizza = new Pizza("cheese", "large",[]);
    expect(testPizza.price).to.equal(14);
  });

  it("will add $2 to the base price for each additional topping selected", function (){
    var testPizza = new Pizza("cheese", "large",["pepperoni"]);
    expect(testPizza.price()).to.equal(16);
  });
});



//   var testPizza = new Pizza ()
