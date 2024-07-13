import React from 'react'
import Title from '../common/title/Title'
import { coaching } from '../../dummydata'
import CoachingPlan from './CoachingPlan'
import './coaching.css'


const CoachingCard = () => {
  return (
    <>
      <section className="courseHome">
        <div className="container flexSB">
        <div className="right row">
          <div className='font-petitFormal font-bold text-4xl text-dark'>
          <Title subtitle='WALK WITH ME' />
          </div>
          <div className="font-inter text-3xl">
            <Title title='Get Premium and Direct Access' />
          </div>
                
                <div className="items">{coaching.map((val) =>(
                    <div className="item flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}</div>
            </div>
            <div className="left row">
                <img src="./images/coach.png" alt="" />
            </div>
        </div>
      </section>
      <CoachingPlan />
    </>
  )
}

export default CoachingCard
