import React, { useReducer } from "react";

//* context values
export const WishlistContext = React.createContext({
  items: [],
  addItem: () => {}, //* adds item to cart from wishlist
  removeItem: () => {}, //* removes items from wishlist
});

const WishListContextProvider = (props) => {
  //? intial state of wishlist:
  const wishlistIntialstate = {
    items: [],
  };

  //? reducer function that handles both adding and removing of items:
  const wishlistReducer = function (state, action) {
    //* adding to wishlist functionality
    if (action.type === "ADD_TO_WISHLIST") {
      const currentwishListItems = state.items.concat(action.items);
      console.log(currentwishListItems);

      return {
        items: [...currentwishListItems],
      };
    }

    //*removing items from wishlist functionaity
    else if (action.type === "REMOVE_FROM_WISHLIST") {
      //* items present in the items array at that current movement.
      const presentWIshlistItems = [...state.items];

      //* removing the selected item in that array by finding the index of that item.
      const selectedItem = presentWIshlistItems
        .map((item) => item.id)
        .findIndex((requiredId) => requiredId === action.id);
      const [removedWishlistItem] = presentWIshlistItems.splice(
        selectedItem,
        1
      );
      console.log(removedWishlistItem);
      return {
        items: [...presentWIshlistItems],
      };
    }
    //* if both actions does not happen this function returns the initial value or state of the items array
    return wishlistIntialstate;
  };

  //? using reducer hook to control the functionalities of the wishlist actions:
  const [currentStateofWishlist, dispatchWishlistActions] = useReducer(
    wishlistReducer,
    wishlistIntialstate
  );

  //? dispatch actions:
  const addItemtoWishlist = function (items) {
    //* payload value is given as items here.
    dispatchWishlistActions({ type: "ADD_TO_WISHLIST", items: items });
  };

  const removeFromWishlist = function (id) {
    //* payload value is given as id here.
    dispatchWishlistActions({ type: "REMOVE_FROM_WISHLIST", id: id });
  };

  //! cart context object that needs to be exported and used by the components that consumer the context provider data.
  const WishlistContext_tobeProvided = {
    items: currentStateofWishlist.items,
    addItem: addItemtoWishlist,
    removeItem: removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={WishlistContext_tobeProvided}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishListContextProvider;
