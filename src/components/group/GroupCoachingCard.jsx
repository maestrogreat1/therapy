import React from "react";
import header1 from '../../assets/images/headerImage.png'
import GWrapper from "./GWrapper";

const GroupCoachingCard = () => {
  return (
    <>
    <section className="groupCoach">
      <div className="mx-auto pt-16">
        <div className="grid grid-cols-2 justify-items-center items-center">
          <div className="w-4/5 pl-24">
            <h3>new things</h3>
            <h1 className="text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark">
              Meet New Amazing People {" "}
              <span className="text-dark text-6xl font-petitFormal font-bold">
                Connect on our
              </span><br/>
              Mobile App
            </h1>
            <div className="mt-4">
              <p className="w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl">
                Giving your life a meaning was never this easy, fast and
                precise. Let us help you accomplish these goals in cozy and
                friendly environment that helps you connect with others. Take
                advantage of what we offer with a simple button click.
              </p>
            </div>
            <div className="pb-20 ">
              <button className="pushable mt-4">
                <span className="front">Start now</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <h2 className="text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark">Modern Best Practices</h2>
            </div>
            <img className="h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl" src={header1} alt="header-phone" />
          </div>
        </div>
      </div>
    </section>

    <GWrapper />
    </>
  );
};

export default GroupCoachingCard;
