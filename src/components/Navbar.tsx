import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

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
    <header className='navbar'>
      <nav className='navbar__container'>
        <div>
          <a href='/' className='navbar__item--button logo'>
            <img alt="Whatsapp Button" src={logo} />            
          </a>
        </div>
        <ul className={`navbar__links ${navbarActive ? 'navbar__links--active' : ''}`}>
          <li className='navbar__item'>
            <Link to='/'>Gym</Link>
          </li>
          <li className='navbar__item'>
            <Link to='/modalities'>Modalidades</Link>
          </li>
          <li className='navbar__item'>
            <Link to='/plans'>Planos</Link>
          </li>
          <li className='navbar__item'>
            <Link to='/schedule'>Horários</Link>
          </li>
          <li className='navbar__item'>
            <Link to='/instructors'>Professores</Link>
          </li>
          <li className='navbar__item'>
            <Link to='/contact'>Contato</Link>
          </li>

          <li className='button primary active'>
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