import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO THERAPY' title='Best Online Sessions' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam officiis sed eveniet quas maxime asperiores corporis magni beatae magnam ut.</p>
                <div className="button">
                    <button className='primary-btn'>
                        GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                        COACHING <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
