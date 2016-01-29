function Pizza(amount, topping, extraToppings) {
  this.amount = amount;
  this.topping = topping;
  this.extraToppings = extraToppings;
}

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
