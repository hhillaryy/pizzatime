function Pizza(amount, toppings) {
  this.amount = amount;
  this.toppings = toppings;
  this.toppingnum = this.toppings.length
}


Pizza.prototype.price = function() {
  var pizzaPrice = 0;
  var sizePrice = 0;
  var toppingPrice = 0;
  if (this.amount === "regular") {
    sizePrice = 14;
  } else if (this.amount === "large") {
    sizePrice = 16;
  } else {}
  if (this.amount === "regular") {
    toppingPrice = this.toppingnum * 2;
  } else if (this.amount === "large") {
    toppingPrice = this.toppingnum * 2.5;
  }
  pizzaPrice = sizePrice + toppingPrice;
  return pizzaPrice;
}
