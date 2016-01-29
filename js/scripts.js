function Pizza(amount, toppings) {
  this.amount = amount;
  this.toppings = toppings;
}

Pizza.prototype.price = 14;

// Pizza.prototype.newPrice = function() {
//  var toppingsPrice = 0
//  var sizePricee = 0
//  if (this.amount === "regular") {
//      sizePrice = 14;
//    } else if (this.amount === "large") {
//      sizePrice = 18;
//      else if (this.amount === "small")
//        toppingsPrice = this.toppingNum * 1;
//      } else if (this.amount === "large") {
//        toppingsPrice = this.toppingNum * 1.5;
//      }

// if (this.topping === "pepperoni") {
//   pizzaPrice += 1;
// }
