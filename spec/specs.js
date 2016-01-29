describe("Pizza", function (){
  it("creates a pizza object to store input properties", function (){
    var testPizza = new Pizza("pepperoni","large");
    expect(testPizza.topping).to.equal("pepperoni");
    expect(testPizza.amount).to.equal("large");
});

});
