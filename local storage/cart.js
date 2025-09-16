const handleAddProducts = () => {
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = parseInt(quantityEl.value);

  
  console.log("product add", product, quantity);

  displayProducts(product, quantity);

  addProductToCart(product, quantity)

  productEl.value = "";
  quantityEl.value = "";
};

const getCart = () => {
  let cart = {};

  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }
  console.log(cartJSON)
  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();
  
  if(cart[product]){
    cart[product] = cart[product] + quantity
  }else{
    cart[product] = quantity;
  }

  console.log("cart", cart);
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayProducts = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;

  // get the ul
  const ul = document.getElementById("products-container");
  ul.appendChild(li);
};


// display products from stored local storage
const displayStoredProducts = () => {
  const cart = getCart();
  for(const product in cart){
    const quantity = cart[product]
    console.log(product, quantity)
    displayProducts(product, quantity)
  }
}

displayStoredProducts();

/**
 * to save object / array in the local storage
 * 1. convert the object to json string by using json.stringify
 * 2. localstorage.setItem()
 */

/**
 * to get object/array from the local storage
 * 1. get the item from the local storage and it will be in JSON string
 * 2. convert the JSON string to js object by using JSON.parse
 */
