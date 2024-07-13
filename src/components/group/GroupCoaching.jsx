import React from "react";
import Back from "../common/back/Back";
import GroupCoachingCard from "./GroupCoachingCard";
import GWrapper from "./GWrapper";
import Groupmid from "./Groupmid";
import GroupmidParent from "./GroupmidParent";
import Team from "./Team";




const GroupCoaching = () => {
  return (
    <>
      <div className="bg-milk mb-20">
        <GWrapper Head>
          <Back />
          <GroupCoachingCard />
        </GWrapper>
      </div>
      <div className="bg-gray-100 w-full">
        <GWrapper>
          <Groupmid></Groupmid>
          <GroupmidParent></GroupmidParent>
          
        </GWrapper>
        <Team />
      </div>
    </>
  );
};

export default GroupCoaching;
