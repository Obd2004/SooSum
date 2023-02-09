import React from 'react'
import { Context } from '../../Context/Context'
import { ShouldDrink } from '../../Data/data'
import './Question.scss'
function Question() {
  const { lan } = React.useContext(Context)
  return (
    <div className='questions'>
      <div className="questions__container container">
        <div className="questions__container__title">
          {
            ShouldDrink?.map((e) => (
              <h2 key={e.id}>{e[`title_${lan}`]}</h2>
            ))
          }
        </div>
        <div className="questions__container__items">
        <ul className="questions__container__items__left">
          {
            ShouldDrink?.map((e)=>(
              e.cause?.map((d )=>(
                <li key={d.id}>{d[`text_${lan}`]}</li>
              ))
            ))
          }
        </ul>
        <ul className="questions__container__items__right">
          {
            ShouldDrink?.map((e)=>(
              e.cause2?.map((d )=>(
                <li key={d.id}>{d[`text_${lan}`]}</li>
              ))
            ))
          }
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Question