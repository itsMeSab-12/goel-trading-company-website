import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="noise-bg"></div>
      <div className="top-symbol-container">
        <img src="src/assets/images/om-symbol.png" className="top-symbol"></img>
      </div>
      <Navbar />
      <main>
        <Outlet /> {/* renders the current page */}
      </main>
      <Footer />
    </>
  );
}
