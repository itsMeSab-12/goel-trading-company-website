import "../page.css";
import HeroCarousel from "../components/HeroCarousel";
// import About from "./About";
// import Products from "./Products";
import Testimonial from "../components/Testimonials";
import Card from "../components/Card";
import Contact from "../components/Contact";
import History from "../components/History";
import Categories from "../components/Categories";
const Home = () => {
  return (
    <>
      <div className="page-container">
        <HeroCarousel />
      </div>
      <div className="page-container testimonial-card-wrapper">
        <div className="testimonial-section">
          <Testimonial />
        </div>
        <div className="card-section">
          <Card />
        </div>
      </div>
      <div className="page-container categories-wrapper">
        <Categories />
      </div>
      <div className="page-container about-history-wrapper">
        <div className="history-section">
          <History />
        </div>
      </div>
      <div className="page-container contact-wrapper">
        <Contact />
      </div>
    </>
  );
};

export default Home;
