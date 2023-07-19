import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Musculacao from '../assets/images/modalidade-musculacao.svg'
import Boxe from '../assets/images/modalidade-boxe.svg'
import JiuJitsu from '../assets/images/modalidade-jiujitsu.svg'
import Muaythai from '../assets/images/modalidade-muaythai.svg'
import About from '../components/About';

function Modalities() {

  const modalities = [
    {
      title: 'Musculação',
      img: Musculacao,
    },
    {
      title: 'Boxe',
      img: Boxe,
    },
    {
      title: 'Jiu Jitsu',
      img: JiuJitsu,
    },
    {
      title: 'Muay Thai',
      img: Muaythai,
    }
  ]

  return (
    <>
      <Navbar/>
      <section className='container'>
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            840: {
              slidesPerView: 1,
              spaceBetween: 15,
            }
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            modalities.map((each, index) => {
              return (
                <SwiperSlide key={index}>
                    <About title={each.title} image={each.img} />
                </SwiperSlide>
              )
            })
          }          
        </Swiper>
      </section>
      <section className='footer'>
        <Footer/>
      </section>
    </>
  )
}

export default Modalities
