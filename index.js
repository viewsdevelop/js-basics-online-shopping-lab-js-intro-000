var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 101)
  }

  cart.push(itemObject);
  return `${itemObject.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else if (cart.length >= 3) {
    var textBase = "In your cart, you have";
    var lineItems = [];

    for (let i = 0; i < cart.length - 1; i++) {
      lineItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }

    var lastItem = `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`

    return textBase + lineItems.toString() + lastItem;
  }
}

function total() {
  var totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }

  return totalPrice;
}

function removeFromCart(item) {
  if (cart.includes(item)) {
    // delete cart[cart.indexOf(item)];
    // return cart;
    alert("HEY!");
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
