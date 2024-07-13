import React from "react";
import Title from "../common/title/Title";
import { homeAbout } from "../../dummydata";
import AWrapper from "./AWrapper";
import "./about.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <div className="font-petitFormal font-bold text-4xl text-dark">
              <Title
                subtitle="Hello"
              />
            </div>
            <div className="font-inter text-3xl">
              <Title title="I am your host Becca Main"/>
            </div>

            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
