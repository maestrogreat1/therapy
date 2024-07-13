import React from 'react'
import TeamCard from './TeamCard'
import Title from '../common/title/Title'


const Team = () => {
  return (
    <>
      <section className="team padding">
      <Title subtitle="Our People" title="Meet The Team" />
        <div className="container gridx">
        
            <TeamCard />
        </div>
      </section>
    </>
  )
}

export default Team
