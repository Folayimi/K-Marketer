import "./Header.css";
import { ShoppingCart, Search, MenuAlt2, X } from "heroicons-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [margin, setMargin] = useState(100);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    window.removeEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, [size]);
  return (
    <>
      {size <= 650 && (
        <div className="mobileNavbar" style={{ left: `${margin}%` }}>
          <div className="close">
            <div className="brandName">KMarketer</div>
            <div className="searchCart">
              <Search size="25px" style={{ cursor: "pointer" }} />
              <ShoppingCart size="25px" style={{ cursor: "pointer" }} />
            </div>
            <X
              size="20px"
              onClick={() => {
                setMargin(100);
              }}
            />
          </div>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
      <div className="header">
        <div className="brandName">KMarketer</div>
        {size > 650 ? (
          <>
            <div className="navbar">
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
              <div className="searchCart">
                <Search size="25px" style={{ cursor: "pointer" }} />
                <ShoppingCart size="25px" style={{ cursor: "pointer" }} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="menu"
              onClick={() => {
                setMargin(0);
              }}
            >
              <MenuAlt2 size="35px" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
