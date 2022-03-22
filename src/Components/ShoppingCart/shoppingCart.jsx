import { Fragment, useContext, useState, useEffect } from "react";
import emptyCart from "../../assets/empty_cart.png";
import CartContext from "../store/CartContext";
import "./shoppingCart.css";

const ShoppingCart = (props) => {
  const [cartList, setcartList] = useState(false); //* for conditional render at line 72

  const cartItemList = useContext(CartContext); //* consuming the provided CartContext

  const displayCart = cartItemList.items;

  const totalPriceofCartItems = cartItemList.totalPrice;

  //! makes the cart items render only for one time:

  useEffect(() => {
    if (cartItemList.items.length !== 0) {
      setcartList(true);
    }
  }, [cartItemList]);

  //? ui response to when user selects to buy the cart items:

  const buyHandler = function () {
    alert(`Are you sure to make payment of Rs ${totalPriceofCartItems}?`);
  };

  //? remove cart item button functionality:

  const deleteHandler = (cartItem_id) => {
    cartItemList.removeItem(cartItem_id); //* accessing removeItem method from context
  };

  //? filtering duplicate items and pushing unique values to a new array:
  const uniqueCartItems = [];

  displayCart.map((itemsMapped) =>
    uniqueCartItems.filter((itemFiltered) => itemsMapped.id === itemFiltered.id)
      .length > 0
      ? null
      : uniqueCartItems.push(itemsMapped)
  );

  //* to get items count:
  const getCartitemsCount = function (item_id) {
    return cartItemList.items.filter((item) => item.id === item_id).length;
  };

  //? item increment handler function
  const itemIncrementhandler = function (item_id) {
    cartItemList.increment(item_id);
  };

  //? item decrement handler function
  const itemdecrement = function (item_id) {
    cartItemList.decrement(item_id);
  };
  return (
    <Fragment>
      <section className="cart-section">
        <h3>
          Shopping Cart <i className="icon ion-md-cart"></i>
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: "bold",
            marginTop: "0.5rem",
          }}
        >
          There are {`${displayCart.length}`} items in your cart.
        </p>
        {uniqueCartItems.map((cartItem) => (
          <div className="cartitemsList-container">
            <div className="item_img">
              <img src={cartItem.img} alt="item_display" />
            </div>
            <div className="item_title">
              <p>{cartItem.title}</p>
            </div>
            <div className="item_price">
              <p>{cartItem.price} ₹</p>
            </div>
            <div className="formDetails">
              <button onClick={() => itemIncrementhandler(cartItem)}>+</button>
              <input type="text" placeholder={getCartitemsCount(cartItem.id)} />
              <button onClick={() => itemdecrement(cartItem.id)}>-</button>
            </div>
            <div className="remove_button">
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(cartItem.id)}
              >
                <i className="ion ion-md-trash"></i>
              </button>
            </div>
          </div>
        ))}
        {/* render this bill part conditionally */}
        {cartList ? (
          <div className="bill_summary">
            <h4>Total Amount to be paid is : {totalPriceofCartItems} ₹</h4>
            {totalPriceofCartItems > 0 && (
              <button className="btn btn-success" onClick={buyHandler}>
                Make Payment
              </button>
            )}
          </div>
        ) : (
          <div className="no_cartItems">
            <img src={emptyCart} alt="Empty Cart" />
            <p>No items to show... 🤷🏼‍♂️</p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default ShoppingCart;
