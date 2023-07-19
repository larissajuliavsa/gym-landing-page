import Navbar from '../components/Navbar'
import Modalities from '../components/Modalities';
import Plans from '../components/Plans';
import Footer from '../components/Footer';
import About from '../components/About';
import AboutImage from '../assets/images/about.svg'



function Home() {
  return (
    <>
      <Navbar/>
      <section className='hero container'>
        <div className='hero__content'>
          <h1 className='hero__title'>Agende sua aula experimental</h1>
          <p className='hero__subtitle'>e transforme seu corpo e sua mente</p>
          <span className='button primary'>
            <a href='/'>Faça sua matrícula</a>
          </span>
        </div>
      </section>

      <About title="About Gym Space" image={AboutImage}/>

      <section className='modalities container'>
        <h1 className='modalities__title'>Modalidades</h1>
      {/* {
        modalities.map((modality, index) => 
          <Modalities key={index} {...modality} />
        )
      } */}
        <Modalities/>
      </section>
      <section className='plans container'>
        <h1 className='plans__title'>Planos</h1>
        <Plans />
      </section>
      <section className='footer'>
        <Footer/>
      </section>
    </>
  )
}

export default Home
