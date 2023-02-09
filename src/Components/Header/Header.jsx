import * as React from 'react'
import './Header.scss'
import logo from '../../Assets/Images/Nav.png'
import { Context } from '../../Context/Context'
import { Btn, Nav } from '../../Data/data'
function Header() {
  const lang = ['uz', 'ru', 'en']
  const { lan, setLan } = React.useContext(Context)
  const [scrol, setScrol] = React.useState(false)
  const offSet = 80;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const handleChange = (event) => {
    setLan(event.target.value);
  };

  React.useEffect(() => {
    window.localStorage.setItem('lan', lan)
  }, [lan])


  return (
    <header className={scrol ? 'header header__bc' : 'header'}>
      <nav className='header__nav container'>
        <div className="header__nav__logo">
          <a href="#home"><img src={logo} alt="" /></a>
        </div>
        <div className="header__nav__list">
          <ul className={scrol ? 'header__nav__list__item header__c' : 'header__nav__list__item'}>
            {
              Nav?.map((e) => (
                <li className='container__nav__list__item' key={e.id}><a href={e.href}>{e[`nav_${lan}`]}</a></li>
              ))
            }
          </ul>
        </div>
        <div className="header__nav__list__btn">
          <select className={scrol ? 'header__select header__s' : 'header__select'} defaultValue={lan} onChange={handleChange}>
            {
              lang.map((e, i) => (
                <option className='' key={i} value={e}>{e}</option>
              ))
            }
          </select>
          {
            Btn?.map((e) => (
              <a className='btnn' href="#buyurtma" key={e.id}>{e[`title_${lan}`]}</a>
            ))
          }
        </div>
      </nav>
    </header>
  )
}

export default Header