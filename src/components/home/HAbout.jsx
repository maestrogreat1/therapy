import React from "react";
import {
  gridCards1,
  gridCards2,
  gridCards3,
  gridCards4,
} from "../../dummydata";
import Title from "../common/title/Title";
import "../gridFront/gridfront.css";
import { Link } from "react-router-dom";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="containers">
          <Title subtitle="FEATURING" title="The Access to Energy Connections" />
          <div className="gridCard">
            <div className="grid2">
              {gridCards1.map((val) => {
                return (
                  <div className="items">
                    <div className="content flex">
                      <div className="left">
                        <div className="img1">
                          <img className="p1" src={val.cover} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>{val.coursesName}</h3>
                        {/* <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label htmlFor="">(5.0)</label>
                        </div> */}
                        {/* <div className="details">
                          {val.courTeacher.map((details) => (
                            <>
                              <div className="box">
                                <div className="dimg">
                                  <img src={details.dcover} alt="" />
                                </div>
                                <div className="para">
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className="price">
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                    </div>
                    <button className="outline-btn">
                      <Link to="/about">Free My Mind!</Link>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="grid2">
              {gridCards2.map((val) => {
                return (
                  <div className="items">
                    <div className="content flex">
                      <div className="left">
                        <div className="img2">
                          <img className="p2" src={val.cover} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>{val.coursesName}</h3>
                        {/* <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label htmlFor="">(5.0)</label>
                        </div> */}
                        {/* <div className="details">
                          {val.courTeacher.map((details) => (
                            <>
                              <div className="box">
                                <div className="dimg">
                                  <img src={details.dcover} alt="" />
                                </div>
                                <div className="para">
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className="price">
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                    </div>
                    <button className="outline-btn">
                      <Link to="/coaching">Capture the Fire Essence</Link>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="grid2">
              {gridCards3.map((val) => {
                return (
                  <div className="items">
                    <div className="content flex">
                      <div className="left">
                        <div className="img3">
                          <img className="p3" src={val.cover} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>{val.coursesName}</h3>
                        {/* <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label htmlFor="">(5.0)</label>
                        </div> */}
                        {/* <div className="details">
                          {val.courTeacher.map((details) => (
                            <>
                              <div className="box">
                                <div className="dimg">
                                  <img src={details.dcover} alt="" />
                                </div>
                                <div className="para">
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className="price">
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                    </div>
                    <button className="outline-btn">
                      <Link to="/group">Awaken My Persona</Link>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="grid2">
              {gridCards4.map((val) => {
                return (
                  <div className="items">
                    <div className="content flex">
                      <div className="left">
                        <div className="img4">
                          <img className="p4" src={val.cover} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>{val.coursesName}</h3>
                        {/* <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label htmlFor="">(5.0)</label>
                        </div> */}
                        {/* <div className="details">
                          {val.courTeacher.map((details) => (
                            <>
                              <div className="box">
                                <div className="dimg">
                                  <img src={details.dcover} alt="" />
                                </div>
                                <div className="para">
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className="price">
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                    </div>
                    <button className="outline-btn">
                      <Link to="/contact">I Want to Resonate Energy</Link>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
