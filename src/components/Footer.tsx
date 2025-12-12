import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-line top-line"></div>
      <div className="footer-content">
        <div className="company-brand">
          {/* <div className="logo"></div> */}
          <div className="company-name">
            Shree Goel<span>Trading Company</span>
          </div>
          <div className="copyright-content">©2025. All Rights Reserved.</div>
        </div>
        <div className="footer-links-container">
          <ul>
            <li className="list-title">Company</li>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </ul>
          <ul>
            <li className="list-title">More Info.</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li className="list-title">Socials</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="footer-line bottom-line"></div>
    </div>
  );
};

export default Footer;
