import React from 'react'
import { Context } from '../../Context/Context'
import { Question } from '../../Data/data'
import './HowUse.scss'
function HowUse() {
    const { lan } = React.useContext(Context)
  return (
    <div className='howUse'>
        <div className="howUse__container container">
            <div className="howUse__container__title">
                {
                    Question?.map((e)=>(
                        <h3 key={e.id}>{e[`title_${lan}`]}</h3>
                    ))
                }
            </div>
            <div className="howUse__container__text">
                {
                    Question?.map((e)=>(
                        <p key={e.id}>{e[`text_${lan}`]}</p>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HowUse