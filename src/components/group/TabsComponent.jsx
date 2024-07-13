import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

const TabsComponent = () => {
  return (
    <div>
      <Tabs
        id="custom-animation"
        value="html"
        classname="grid grid-cols-2 justify-items-center content-between w-full"
      >
        <div className="w-4/5 pl-24">
          <h1 className="text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none">
            features
          </h1>
          <p className="text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perferendis, autem ad explicabo molestias cumque laudantium eligendi, corporis quibusdam sunt quasi nam placeat unde veritatis itaque exercitationem laborum molestiae nisi tempora! Veniam tempora architecto iusto quibusdam similique minus quo, voluptates dolores ipsum numquam labore nam autem mollitia vel perferendis deleniti eos recusandae porro placeat inventore ex odio quae! Debitis, perspiciatis.
          </p>
        </div>
        <TabsHeader className="flex justify-center items-center content-center bg-gray-100">
          <Tab></Tab>
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel></TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default TabsComponent
