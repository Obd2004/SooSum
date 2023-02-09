import React from 'react'
import { Context } from '../../Context/Context'
import { FactsData } from '../../Data/data'
import './Faktlar.scss'
function Faktlar() {
  const { lan } = React.useContext(Context)
  return (
    <div className='faktlar' id='faktlar'>
      <div className="faktlar__container container">
        <div className="faktlar__container__title">
          {
            FactsData?.map((e) => (
              <h2 key={e.id}>{e[`title_${lan}`]}</h2>
            ))
          }
        </div>
        <ul className='faktlar__container__list'>
          {
            FactsData?.map((e)=>(
              e.facts?.map((q,i)=>(
                <li key={e.id} className='faktlar__container__list__item'>
                  <h2 key={i} className='faktlar__container__list__item__title'>{q.numb}</h2>
                  <p key={i} className='faktlar__container__list__item__text'>{q[`text_${lan}`]}</p>
                </li>
              ))
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Faktlar