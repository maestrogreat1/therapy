import React, { useEffect, useState } from "react";
import GroupButton from "./GroupButton";
import { sliderData } from "../../DataForPage/dummyData";
import GroupChild from "./GroupChild";
import { motion } from "framer-motion";

const Groupmid = () => {
  const buttons = [
    {
      id: "1",
      name: "Meditation",
    },
    {
      id: "2",
      name: "Yoga",
    },
    {
      id: "3",
      name: "Therapy",
    },
  ];

  const [selected, setSelected] = useState("1");
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);

  const filterData = (button) => {
    const filter = sliderData.filter((item) => item.id === button);
    setData(filter);
    setSelected(button);
    setClick(true);
  };

  useEffect(() => {
    const putData = (data) => {
      setData(data.filter((item) => item.id === 1));
    };
    putData(sliderData);
  }, []);

  return (
    <div className="mx-auto pt-72 pb-56" id="news">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <motion.div
          className="w-4/5 mx-auto pl-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2 className="w-96 text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case text-dark">
            Check out some of our events
          </h2>
          <GroupButton
            buttons={buttons}
            filter={filterData}
            selected={selected}
          ></GroupButton>
        </motion.div>
        <div className="ml-20 pb-4 relative mx-auto w-8/12 rounded-xl drop-shadow-2xl">
          <GroupChild data={data} click={click}></GroupChild>
        </div>
      </div>
    </div>
  );
};

export default Groupmid;
