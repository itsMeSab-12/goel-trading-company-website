import "../ui.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
        <div id="main-logo">
          <span>Shree Goel</span> Trading Company
        </div>
        <ul className="links-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {/* <li>
            <Link to="/categories">Categories</Link>
          </li> */}
          {/* <li>
            <Link to="/testimonials">Testimonials</Link>
          </li> */}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
