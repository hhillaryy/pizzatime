describe("Pizza", function() {
  it("creates a new Pizza object with properties for name, size (aka amount), and topping numbers", function () {
      var testPizza = new Pizza("Regular",["Pepperoni", "Sausage", "Olives", "Garlic"]);
      expect(testPizza.amount).to.equal("Regular");
      expect(testPizza.toppings).to.eql(["Pepperoni", "Sausage", "Olives", "Garlic"]);
    });

  it("adds a method to calculate pizza price for any pizza", function() {
    var testPizza = new Pizza("Regular",["Pepperoni", "Sausage", "Olives", "Garlic"]);
    expect(testPizza.price()).to.equal(22);
  });
  it("charges $14 for a Regular pizza", function (){
    var testPizza = new Pizza("Regular",[]);
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $16 for a large pizza", function (){
    var testPizza = new Pizza("Large",[]);
    expect(testPizza.price()).to.equal(16);
  });
  it("charges $2 per topping for a Regular pizza", function() {
    var testPizza = new Pizza("Regular", ["Pepperoni"]);
    expect(testPizza.price()).to.equal(16);
  });
  it("charges $2.50 per topping for a Large pizza", function() {
    var testPizza = new Pizza("Large", ["Pepperoni"]);
    expect(testPizza.price()).to.equal(18.5);
  });
});
