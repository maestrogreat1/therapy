
import React from 'react'

const GroupButton = ({ buttons, filter, selected}) => {
  return (
    <div className='flex items-center pt8'>
      {buttons.map((button) => {
        return (
            <button className={selected === button.id ? "pushable" : 'pushable'} key={button.id} onClick={() => filter(button.id)}>
                <span className={selected === button.id ? "front2" : "front"}>{button.name}</span>
            </button>
        )
      })}
    </div>
  )
}

export default GroupButton
