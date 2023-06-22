import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  
  
  const handleClick = () => {
    setNavbarActive(!navbarActive);
    setBurgerActive(!burgerActive);
    console.log('clicou')
  }
  
  console.log('🚀 ~ navbarActive:', navbarActive)
  return (
    <header className='container'>
      <nav className='navbar'>
        <div>
          <a href='/' className='navbar__item--button logo'>
            <img alt="Whatsapp Button" src={logo} />            
          </a>
        </div>
        <ul className={`navbar__links ${navbarActive ? 'navbar__links--active' : ''}`}>
          <li className='navbar__item'>
            <a>Gym</a>
          </li>
          <li className='navbar__item'>
            <a>Modalidades</a>
          </li>
          <li className='navbar__item'>
            <a>Planos</a>
          </li>
          <li className='navbar__item'>
            <a>Horários</a>
          </li>
          <li className='navbar__item'>
            <a>Professores</a>
          </li>
          <li className='navbar__item'>
            <a>Contato</a>
          </li>

          <li className='button__primary active'>
            <a href='/'>Faça sua matrícula</a>
          </li>
        </ul>
        <button
          onClick={handleClick}
          className={`burger ${burgerActive ? 'toggle' : ''}`}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </button>
      </nav>
    </header>
  )
}

export default Navbar