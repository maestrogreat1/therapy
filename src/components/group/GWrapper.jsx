import React from 'react'


const GWrapper = ({Head, children}) => {
  return <div className={!Head ? "container mx-auto mt-700 px-4 bg-wrapperBg h-full w-full bg-cover bg-no-repeat bg-center rounded-xl -translate-y-36 drop-shadow-2xl" : "container mx-auto px-4" }>{children}</div>
}

export default GWrapper
