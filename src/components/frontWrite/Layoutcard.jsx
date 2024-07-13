import React, { useRef } from "react";
import Title from "../common/title/Title";
import { layout, layout2 } from "../../dummydata";
import LWrapper from "./LWrapper";
import "./layout.css";
import user_1 from "../../../src/assets/user-1.png";
import user_2 from "../../../src/assets/user-2.png";
import user_3 from "../../../src/assets/user-3.png";
import user_4 from "../../../src/assets/user-4.png";
import next_icon from "../../../src/assets/next-icon.png";
import back_icon from "../../../src/assets/back-icon.png";
import { Link } from "react-router-dom";

const LayoutCard = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <>
      <section className="layoutHome">
        <div className="containers flexSB">
          <div className="left row">
            <img src="./images/stretchhome.png" alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="Get Started"
              title="Benefits of Online Consultations"
            />
            <div className="items">
              {layout2.map((val) => (
                <div className="item flexSB">
                  {/* <div className="img">
                    <img src={val.cover} alt="" />
                  </div> */}
                  <div className="text">
                    <p>{val.desc}</p>
                    <h2>{val.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="layoutHome">
        <div className="containersx flexSB">
          <div className="right row">
            <Title
              subtitle="Seek The Truth"
              title="Explore the Depths of Deep Thinking"
            />
            <div className="items">
              {layout.map((val) => (
                <div className="item flexSB">
                  {/* <div className="img">
                    <img src={val.cover} alt="" />
                  </div> */}
                  <div className="text">
                    <p>{val.desc}</p>
                    <h2>{val.sub}</h2>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn">
              <Link to="contact" smooth={true} offset={-260} duration={500}>
                I Want this right now!
              </Link>
            </button>
          </div>
          <div className="left row">
            <img src="./images/backbaby.png" alt="" />
          </div>
        </div>
      </section>
      <LWrapper />
      
      <div>
      <div className="font-inter text-4xl font-bold">
          <Title title='Meet our Clientele' subtitle='Our Success Story'/>
        </div>
      <div className="testimonials">
        
        <img
          src={next_icon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Pia Curtis</h3>
                    <span>XpressTokens UK</span>
                  </div>
                </div>
                <p>
                  Choosing to enhance my career with the Berry group is one of
                  the best decisions I've ever made. The supportive community,
                  state-of-the-art facilties and commitment to business
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Khalifa Group, UAE</span>
                  </div>
                </div>
                <p>
                  Choosing to enhance my career with the Berry group is one of
                  the best decisions I've ever made. The supportive community,
                  state-of-the-art facilties and commitment to business
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Anne Stryder</h3>
                    <span>Aims Assets, South Africa</span>
                  </div>
                </div>
                <p>
                  Choosing to enhance my career with the Berry group is one of
                  the best decisions I've ever made. The supportive community,
                  state-of-the-art facilties and commitment to business
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Jullian McBridge</h3>
                    <span>Pixel Arts, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to enhance my career with the Berry group is one of
                  the best decisions I've ever made. The supportive community,
                  state-of-the-art facilties and commitment to business
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default LayoutCard;
