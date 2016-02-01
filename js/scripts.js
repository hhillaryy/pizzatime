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

// had some help here to figure out how to get the array pushing properly
var getToppings = function() {
  var allToppings = [];
  $(".regular:checked").each(function() {
    allToppings.push($(this).val());
  })
  return allToppings;
}

// need to write a doc ready jquery section that calls back to user inputs to the pizza constructor and generates and displays the result div. Having trouble figuring out how to get inputs from a checkbox too.
$(document).ready(function () {
  var newOrder = new Order(); // creates a new order for the page
  $("form#pizza-calculator").submit(function(event) {
    event.preventDefault();
    // gets input from page, including running the functions for the toppings
    var size = $('input:checkbox[name=""]:checked').val();
    var toppings = getToppings();
    var crust = $('input:checkbox[name=""]:checked').val();
})
var newPizza = new Pizza(amount, toppings, price);
    newOrder.total += newPizza.price()
    return NewOrder;
