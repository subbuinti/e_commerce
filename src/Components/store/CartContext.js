import React from "react";

const intialCartState = {
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increment: (item) => {},
  decrement: (id) => {},
};

const CartContext = React.createContext(intialCartState);

export default CartContext;
