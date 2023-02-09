import React from 'react'
import './MahsulotAbout.scss'
import jenshen1 from '../../Assets/Images/jenshen1.png'
import jenshen2 from '../../Assets/Images/jenshen2.png'
import jenshen3 from '../../Assets/Images/jenshen3.png'
import Aos from 'aos'
import { ProductInfo } from '../../Data/data'
import { Context } from '../../Context/Context'
function MahsulotAbout() {
    Aos.init()
    const { lan } = React.useContext(Context)
    return (
        <div className='MahsulotAbout'>
            <div className="MahsulotAbout__container container">
                <div data-aos="fade-right" className="MahsulotAbout__container__left" >
                   {
                    ProductInfo?.map((e)=>(
                        e.id == 1 ? <p className='text1' key={e.id}>{e[`text_${lan}`]}</p> : false
                    ))
                   }

                </div>
                <div data-aos="fade-left" className="MahsulotAbout__container__right">
                    <img src={jenshen1} alt="" />
                </div>
            </div>
            <div className="MahsulotAbout__container2 container">
                <div data-aos="fade-right" className="MahsulotAbout__container__left">
                    <img src={jenshen2} alt="" />
                </div>
                <div data-aos="fade-left" className="MahsulotAbout__container2__right">
                    {
                        ProductInfo?.map((e)=>(
                            e.id == 2 ? <p key={e.id} className='text2'>{e[`text_${lan}`]}</p> : false
                        ))
                    }
                </div>
            </div>
            <div data-aos="fade-up" className="MahsulotAbout__container3 container">
                <div className="MahsulotAbout__container3__left">
                    {
                        ProductInfo?.map((e)=>(
                            e.id == 3 ? <p key={e.id}>{e[`text_${lan}`]}</p> : false
                        ))
                    }
                </div>
                <div className="MahsulotAbout__container3__right">
                    <img src={jenshen3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MahsulotAbout