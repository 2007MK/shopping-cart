function addItem(cart, product) {
  return [...cart, product];
}

function removeItem(cart, product) {
  const updatedCart = cart.filter((item) => item.id !== product.id);
  return updatedCart;
}

export { addItem, removeItem };
