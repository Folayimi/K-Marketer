import "./Footer.css";
import faceb from "../../assets/faceb.svg";
import inst from "../../assets/inst.svg";
import twitter from "../../assets/twitter.svg";
import yt from "../../assets/yt.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="brand">KMarketer</div>
          <div className="handles">
            <Link to="/">
              <img src={faceb} alt="facebook" />
            </Link>
            <Link to="/">
              <img src={inst} alt="instagram" />
            </Link>
            <Link to="/">
              <img src={twitter} alt="twitter" />
            </Link>
            <Link to="/">
              <img src={yt} alt="youtube" />
            </Link>
          </div>
        </div>
        <hr style={{ background: "#364067", height: "2px", border: "none" }} />
        <div className="contents">
          <ul>
            <p>Company Info</p>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
          <ul>
            <p>Company Info</p>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
          <ul>
            <p>Features</p>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
          <ul>
            <p>Resources</p>
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
          <div className="touch">
            <p>Get In Touch</p>
            <div>
                <div className="cont">
                    <input type="text" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
                <p className="dt">Lorem impsum dolor amit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
