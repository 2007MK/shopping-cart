function addItem(cart, product) {
  const alreadyExisting = cart.find((item) => item.id === product.id);
  if (alreadyExisting) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  }

  return [...cart, { ...product, quantity: 1 }];
}

function removeItem(cart, product) {
  const item = cart.find((item) => item.id === product.id);
  if (item.quantity === 1) return cart.filter((item) => item.id !== product.id);
  return cart.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
  );
}

function getQuantityOfItem(cart, product) {
  const item = cart.find((item) => item.id === product.id);
  if (item === undefined) return 0;
  return item.quantity;
}

function getTotalItems(cart) {
  const total = cart.reduce((total, item) => total + item.quantity, 0);
  return total;
}

function getCartValue(cart) {
  const total = Math.round(
    cart.reduce((total, item) => total + item.quantity * item.price, 0),
  );
  return total;
}

export { addItem, removeItem, getQuantityOfItem, getTotalItems, getCartValue };
