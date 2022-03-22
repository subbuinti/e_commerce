import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";
import "./header.css";
import DataContext from "../../data";

const Header = () => {
  const [filtered, setFiltered] = useState([]);
  const data = useContext(DataContext);

  //? search functionality:
  const searchHandler = function (e) {
    const enteredCharacters = e.target.value;
    const searchFilter = data.filter((items) => {
      return items.title
        .toLowerCase()
        .includes(enteredCharacters.toLowerCase());
    });
    console.log(searchFilter);
    setFiltered(searchFilter);

    enteredCharacters === "" ? setFiltered([]) : setFiltered(searchFilter);
  };

  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <p className="navbar-brand">
            <span>C</span>orner <span>Store</span>
          </p>
          <div className="d-block search-container">
            <div className="search-box d-flex">
              <div className="search-box__wrapper">
                <input
                  type="search"
                  placeholder="Search Here..."
                  onChange={searchHandler}
                />
              </div>
              <button className="btn btn-primary">Search</button>
            </div>

            {filtered.length > 0 && (
              <div className="searchResults-wrapper">
                <div className="results">
                  {filtered.map((items) => (
                    <Link to={`/item/${items.id}/itemdetails/${items.title}`}>
                      <p>{items.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="navbar-group__icon">
            <div className="icon__set">
              <CartIcon />
              <Link to="/home">
                <i
                  className="icon ion-md-home text-black"
                  style={{ cursor: "pointer" }}
                ></i>
              </Link>
              <Link to="/wishlist">
                <i className="icon ion-md-heart text-black"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
