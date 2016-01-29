describe("Pizza", function() {
  it("creates a new Pizza object with properties for name, size. topping numbers, and crust type", function() {
      var testPizza = new Pizza("regular", ["pepperoni", "sausage", "olives", "garlic"]);
      expect(testPizza.amount).to.equal("regular");
      expect(testPizza.toppings).to.eql(["pepperoni", "sausage", "olives", "garlic"]);
    });

  it("adds a method to calculate pizza price", function() {
    var testPizza = new Pizza("cheese", "regular",[["pepperoni", "sausage", "olives", "garlic"]]);
    expect(testPizza.price).to.equal(14);
  });
});

  // it("charges $14 for a regular pizza,", function(){
  //   var testPizza = new Pizza("cheese", "regular",[]);
  //   expect(testPizza.price()).to.equal(14);
  // });
  //
  // it("will add $2 to the base price for each additional topping selected", function (){
  //   var testPizza = new Pizza("cheese", "regular",["pepperoni"]);
  //   expect(testPizza.newPrice()).to.equal(16);
  // });
// });



//   var testPizza = new Pizza ()
