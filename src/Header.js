import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />

        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/SignIn">
          <div className="header_option">
            <span className="header_optionOne">Hello Guest</span>

            <span className="header_optionTwo">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Yours</span>
          <span className="header_optionTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="Header_optionTwo  .header_optionBasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
