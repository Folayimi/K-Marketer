import "./LandingPage.css";
import { Link } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import w1 from "../../assets/w1.svg";
import w2 from "../../assets/w2.svg";
import w3 from "../../assets/w3.svg";
import w4 from "../../assets/w4.svg";
import w5 from "../../assets/w5.svg";
import w6 from "../../assets/w6.svg";
import d1 from "../../assets/d1.svg";
import d2 from "../../assets/d2.svg";
import d3 from "../../assets/d3.svg";
import t1 from "../../assets/t1.svg";
import t2 from "../../assets/t2.svg";
import t3 from "../../assets/t3.svg";

import stars from "../../assets/stars.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

import { Play } from "heroicons-react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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

  const Reviews = [
    {
      image: stars,
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      profPic: d1,
      name: "Regina Miles",
      role: "Designer",
    },
    {
      image: stars,
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      profPic: d2,
      name: "Regina Miles",
      role: "Designer",
    },
    {
      image: stars,
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      profPic: d3,
      name: "Regina Miles",
      role: "Designer",
    },
  ];

  const Team = [
    {
      image: t1,
      name: "Ashley Fletcher",
      title: "CEO",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      image: t2,
      name: "Rodney Stratton",
      title: "Consultant",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
    },
    {
      image: t3,
      name: "Avie Beaton",
      title: "CO Founder  ",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
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
          <div className="topic" id="topic">
            <h1>We are providing best business service.</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="underlay">
            <div className="videobg">
              <div className="vidCont">
                <Play
                  color="#00A0C1"
                  size="110px"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="topic">
            <h1>What Clients Say</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="reasons">
            {Reviews.map((reaview, i) => {
              return (
                <>
                  <div key={i} className="Rcard" id="review">
                    <div className="up">
                      <div className="image" id="star">
                        <img src={reaview.image} alt={`${reaview.image}`} />
                      </div>
                    </div>
                    <div className="down">
                      <p>{reaview.content}</p>
                    </div>
                    <div className="prof">
                      <div className="pImage">
                        <img src={reaview.profPic} alt={`${reaview.profPic}`} />
                      </div>
                      <div className="detail">
                        <div className="name">
                          <p>{reaview.name}</p>
                        </div>
                        <div className="role">
                          <p>{reaview.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="section">
          <div className="topic">
            <h1>Meet Our Team</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="reasons">
            {Team.map((member, i) => {
              return (
                <>
                  <div key={i} className="team">
                    <div className="image">
                      <img src={member.image} alt={`${member.image}`} />
                    </div>
                    <div className="base">
                      <div className="name">
                        <p>{member.name}</p>
                      </div>
                      <p className="tlt">{member.title}</p>
                      <div className="handles">
                        <Link to={member.facebookLink}>
                          <img src={facebook} alt="facebook" />
                        </Link>
                        <Link to={member.instagramLink}>
                          <img src={instagram} alt="instagram" />
                        </Link>
                        <Link to={member.twitterLink}>
                          <img src={twitter} alt="twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
