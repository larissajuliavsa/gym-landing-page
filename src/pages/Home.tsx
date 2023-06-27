import Navbar from '../components/Navbar'

import musculacao from '../assets/images/modalidade-musculacao.svg';
import boxe from '../assets/images/modalidade-boxe.svg';
import jiujitsu from '../assets/images/modalidade-jiujitsu.svg';
import muaythai from '../assets/images/modalidade-muaythai.svg';

function Home() {
  return (
    <>
      <Navbar/>
      <section className='hero container'>
        <div className='hero__content'>
          <h1 className='hero__title'>Agende sua aula experimental</h1>
          <p className='hero__subtitle'>e transforme seu corpo e sua mente</p>
          <span className='button__primary'>
            <a href='/'>Faça sua matrícula</a>
          </span>
        </div>
      </section>

      <section className='about container'>
        <div className='about__content'>
          <div className='about__text container--sm'>
            <h1 className='about__title'>About Gym Space</h1>
            <p className='about__p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className='about__p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className='about__image'></div>
      </section>

      <section className='modalities container'>
        <div>
          <img alt="Modalidade musculação" src={musculacao} />
          <p>Musculação</p>
        </div>
        <div>
          <img alt="Modalidade boxe" src={boxe} />
          <p>Boxe</p>
        </div>
        <div>
          <img alt="Modalidade jiujitsu" src={jiujitsu} />
          <p>Jiu Jitsu</p>
        </div>
        <div>
          <img alt="Modalidade muaythai" src={muaythai} />
          <p>Muay Thai</p>
        </div>
      </section>
    </>
  )
}

export default Home
