import React from "react";
import GroupItem from "./GroupItem";
import MidPhone1 from "../../assets/images/MidComponentPhone.png";
import MidPhone2 from "../../assets/images/midPhone2.png";

const GroupmidParent = () => {
  return (
    <div>
      <GroupItem
        title="Dive into the future"
        text="In a world where people constantly have phone in their hands, the need for online opportunites is growing. We have a solution - fully digital access to all information and services related to the inner-most parts of our persona. Everything for a carefree stay in the palm of a hand."
        img={MidPhone1}
        reverse
      ></GroupItem>
      <GroupItem title="Search by Mentor" img={MidPhone2}></GroupItem>
    </div>
  );
};

export default GroupmidParent;
