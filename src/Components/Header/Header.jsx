import "./Header.css";
import { ShoppingCart, Search } from "heroicons-react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="brandName">KMarketer</div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <div className="searchCart">
            <Search size="25px" style={{cursor:"pointer"}}/>
            <ShoppingCart size="25px" style={{cursor:"pointer"}}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
