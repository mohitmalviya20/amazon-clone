import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket,user }] = useStateValue();
  const login= ()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchOutlined className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
  <span className="header_optionLineOne">Hello {user?.email}</span>
            <span className="header_optionLineTwo">{user?"Sign Out": "Sign In"}</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& orders</span>
          </div>
        </Link>
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketOutlined />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
