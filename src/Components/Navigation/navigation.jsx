import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <aside className="aside-menu">
        <div className="aside-menu__block">
          <ul className="aside-menu__items">
            <li>
              <NavLink activeClassName="active" to="/brandedfood">
                Branded Food
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/household">
                Households
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/vegetablesfruits">
                Veggies & Fruits
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/kitchen">
                Kitchen
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/beverages">
                Beverages
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/petfood">
                Pet Food
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/frozenfood">
                Frozen Food Snack
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/bakery">
                Bread & Bakery
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  );
};

export default Navigation;
