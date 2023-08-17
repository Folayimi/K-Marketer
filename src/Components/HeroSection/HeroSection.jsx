import Header from "../Header/Header";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="overlay">
          <Header />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
