import "./LandingPage.css";
import HeroSection from "../HeroSection/HeroSection";
import w1 from "../../assets/w1.svg";
import w2 from "../../assets/w2.svg";
import w3 from "../../assets/w3.svg";
import w4 from "../../assets/w4.svg";
import w5 from "../../assets/w5.svg";
import w6 from "../../assets/w6.svg";
import { Play, PlayOutline } from "heroicons-react";
const LandingPage = () => {
  const Reasons = [
    {
      image: w1,
      topic: "Digital Marketing",
      content:
        "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
    },
    {
      image: w2,
      topic: "Digital Marketing",
      content:
        "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
    },
    {
      image: w3,
      topic: "Business Growing",
      content:
        "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
    },
    {
      image: w4,
      topic: "National top 50 firms",
      content:
        "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
    },
    {
      image: w5,
      topic: "National top 50 firms",
      content:
        "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
    },
    {
      image: w6,
      topic: "Web Development",
      content:
        "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
    },
  ];
  return (
    <>
      <div className="container">
        <HeroSection />

        <div className="section">
          <div className="topic">
            <h1>WHY CHOOSE US</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="reasons">
            {Reasons.map((reason, i) => {
              return (
                <>
                  <div key={i} className="Rcard">
                    <div className="up">
                      <div className="image">
                        <img src={reason.image} alt={`${reason.image}`} />
                      </div>
                      <p>{reason.topic}</p>
                    </div>
                    <div className="down">
                      <p>{reason.content}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="section" id="video">
          <div className="topic">
            <h1>We are providing best business service.</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="underlay">
            <div className="videobg">
              <div className="vidCont">
                <Play color="#00A0C1" size="110px" style={{cursor:"pointer"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
