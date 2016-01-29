describe("Pizza", function (){
  it("creates a pizza object to store input properties", function (){
    var testPizza = new Pizza("cheese","large");
    expect(testPizza.topping).to.equal("cheese");
    expect(testPizza.amount).to.equal("large");
  });

  it("returns the base price of the pizza", function() {
    var testPizza = new Pizza("cheese", "large");
    expect(testPizza.price).to.equal(14);
  });
});



//   var testPizza = new Pizza ()
