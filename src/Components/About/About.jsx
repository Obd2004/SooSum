import React from 'react'
import './About.scss'
import uy from '../../Assets/Images/aboutUy.png'
import { AboutCompany } from '../../Data/data'
import { Context } from '../../Context/Context'
function About() {
  const { lan } = React.useContext(Context)
  return (
    <div className='about' id='about'>
        <div className="about__container container">
          <div className="about__container__left">
            {
              AboutCompany?.map((e)=>(
                <h2>{e[`title_${lan}`]}</h2>
              ))
            }
            {
              AboutCompany?.map((e)=>(
                <p>{e[`text_${lan}`]}</p>
              ))
            }
          </div>
          <div className="about__container__right">
            <img src={uy} alt="" />
          </div>
        </div>
    </div>
  )
}

export default About