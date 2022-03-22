import React, { Fragment } from "react";
import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import Main from "../Main/main";
import "./home.css";
import Bakery from "../ItemsCategories/Bakery";
import BrandedFood from "../ItemsCategories/BrandedFood";
import Beverages from "../ItemsCategories/Beverages";
import FrozenFood from "../ItemsCategories/FrozenFood";
import HouseHold from "../ItemsCategories/HouseHold";
import Kitchen from "../ItemsCategories/Kitchen";
import PetFood from "../ItemsCategories/PetFood";
import VegetableFruits from "../ItemsCategories/Vegetable_Fruits";
import { Route, Switch, Redirect } from "react-router-dom";
import Errorpage404 from "../PagenotFound/404Error";
import ProductDetail from "../ProductDetailComponent/ProductDetail";
import WishlistItems from "../WishlistedItems/WishlistItems";

const home = (props) => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <div className="main-section p-3">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home" exact component={Main}></Route>

          <Route path="/bakery" exact component={Bakery}></Route>

          <Route path="/beverages" exact component={Beverages}></Route>

          <Route path="/brandedfood" exact component={BrandedFood}></Route>

          <Route path="/frozenfood" exact component={FrozenFood}></Route>

          <Route path="/household" exact component={HouseHold}></Route>

          <Route path="/kitchen" exact component={Kitchen}></Route>

          <Route path="/petfood" exact component={PetFood}></Route>

          <Route
            path="/vegetablesfruits"
            exact
            component={VegetableFruits}
          ></Route>

          <Route path="/cart" exact component={ShoppingCart}></Route>

          <Route path="/wishlist" exact component={WishlistItems}></Route>

          {/* creating dynamic route for item details */}
          <Route path="/item/:itemId" component={ProductDetail}></Route>

          <Route path="*" component={Errorpage404}></Route>
        </Switch>
      </div>
    </Fragment>
  );
};

export default home;
