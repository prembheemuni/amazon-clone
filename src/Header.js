import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from "./StateProvider";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { auth } from "./FireBase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuth = () => {
    auth.signOut();
  };

  const name = ()=>{
    let n = user?.email;
    if(n) n = n.slice(0,5)
    return n;
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          className="header_logo"
          alt="amxon logi"
        />
      </Link>
      <div className="header_option header__adressRemove">
        <div>
          <AddLocationAltOutlinedIcon />
          <span className="header_option_line_two header__adress">Select Your Adress</span>
        </div>
      </div> 
      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <Link to={user === null && "/signin"}>
          <div className="header_option" onClick={handleAuth}>
            <span className="header_option_line_one">Hello {name()}</span>
            <span className="header_option_line_two">
              {user !== null ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_line_one">Returns</span>
          <span className="header_option_line_two">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_option_basket">
            <div className="header_cart"> 
            
            <span className="header_option_line_two header_basket_count">
              {basket?.length}
            </span>
            <div className="cart_align">
            <ShoppingCartOutlinedIcon/>
            <span className="heade_option_line_two cart">Cart</span>
            </div>
            
            </div>
            
            
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
