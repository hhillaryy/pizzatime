function Pizza(amount, toppings) {
  this.amount = amount;
  this.toppings = toppings;
}
  this.toppings = ["pepperoni", "sausage", "olives", "garlic"];

Pizza.prototype.price = 14;

Pizza.prototype.newPrice = function() {
var numOfToppings = this.toppings.length;
  var additionalToppings = (numOfToppings - 1)
  var additionalToppingsPrice = additionalToppings * 2
  var finalPrice = additionalToppingsPrice + this.price
return finalPrice;
};


// if (this.topping === "pepperoni") {
//   pizzaPrice += 1;
// }
