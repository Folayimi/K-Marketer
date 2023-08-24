import Header from "../Header/Header";
import "./HeroSection.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const drop = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        mass: 2,
        damping: 4,
        duration: 1,
      },
    },
  };

  const graduallyAppear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
      },
    },
  };
  return (
    <>
      <div className="hero-section">
        <div className="overlay">
          <Header />
          <div className="contents">
            <motion.h1 variants={drop} initial="hidden" animate="visible">
              We Take Care of the Future
            </motion.h1>
            <motion.p
              variants={graduallyAppear}
              initial="hidden"
              animate="visible"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </motion.p>
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
