import React from "react";
import Home from "./Components/Home/home";
import CartContextProvider from "./Components/store/CartContextProvider";
import WishListContextProvider from "./Components/store/WishListContext";
import DataContext, { ITEMS_ARRAY } from "./data";

const App = () => {
  return (
    <DataContext.Provider value={ITEMS_ARRAY}>
      <WishListContextProvider>
        <CartContextProvider>
          <Home />
        </CartContextProvider>
      </WishListContextProvider>
    </DataContext.Provider>
  );
};

export default App;
