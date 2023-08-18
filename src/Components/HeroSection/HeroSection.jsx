import Header from "../Header/Header";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="overlay">
          <Header />
          <div className="contents">
            <h1>We Take Care of the Future</h1>
            <p>
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
            <div className="Hbtns">
              <div className="Hbtn1">Get Quote Now</div>
              <div className="Hbtn2">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
