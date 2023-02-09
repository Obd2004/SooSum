import React from 'react'
import './Mahsulot.scss'
import jenshen from '../../Assets/Images/jenshen.png'
function Mahsulot() {

  return (
    <div className='mahsulot' id='mahsulot'>
        <div className="mahsulot__container container">
          <div className="mahsulot__container__left">
            <img className='dori' src={jenshen} alt="" />
            <span><h5>Oddiy jenshen</h5> <h3>1 199 000</h3></span>
          </div>
          <div className="mahsulot__container__right">
            <img className='dori' src={jenshen} alt="" />
            <span><h5>Qizil jenshen</h5> <h3>1 199 000</h3></span>
          </div>
        </div>
    </div>
  )
}

export default Mahsulot