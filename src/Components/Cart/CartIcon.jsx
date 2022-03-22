import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";

const CartIcon = () => {
  const cartItemContext = useContext(CartContext);

  const numberOfCartitems = cartItemContext.items.length;
  return (
    <Fragment>
      <Link to="/cart">
        <i className="icon ion-md-cart text-black"></i>
        <span className="number__badge">{numberOfCartitems}</span>
      </Link>
    </Fragment>
  );
};

export default CartIcon;
