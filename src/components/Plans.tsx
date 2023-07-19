import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import musculacaoImage from '../assets/images/planos-musculacao.svg';
import boxeImage from '../assets/images/planos-boxe.svg';
import infantilImage from '../assets/images/planos-infantil.svg';
import checkIcon from '../assets/images/check.svg';

const Plans = () => {
  const plans = [
    {
      title: 'Plano de Musculação',
      img: musculacaoImage,
      desc: ['Horário Livre', 'Musculação Grátis'],
      inicialValue: '100',
      prices: [
        {
          month: ['mensal','1x R$200', null]
        },
        {
          month: ['trimestral','3x R$160', '(R$480)']
        },
        {
          month: ['quadrimestral','4x R$140', '(R$560)']
        },
        {
          month: ['semestral','6x R$120', '(R$720)']
        },
        {
          month: ['anual','12x R$100', '(R$1200)']
        }
      ],
      schedule: false
    },
    {
      title: 'Plano de Lutas',
      img: boxeImage,
      desc: ['Horário Livre', 'Musculação Grátis', 'Todas as Lutas'],
      inicialValue: '350',
      prices: [
        {
          month: ['mensal','1x R$560', null]
        },
        {
          month: ['trimestral','3x R$490', '(R$1470)']
        },
        {
          month: ['quadrimestral','4x R$450', '(R$1800)']
        },
        {
          month: ['semestral','6x R$390', '(R$2340)']
        },
        {
          month: ['anual','12x R$350', '(R$4200)']
        }
      ],
      schedule: true
    },
    {
      title: 'Plano de Lutas Infantil',
      img: infantilImage,
      desc: ['Todas as Lutas'],
      inicialValue: '250',
      prices: [
        {
          month: ['mensal','1x R$400', null]
        },
        {
          month: ['trimestral','3x R$310', '(R$930)']
        },
        {
          month: ['quadrimestral','4x R$290', '(R$1160)']
        },
        {
          month: ['semestral','6x R$270', '(R$1620)']
        },
        {
          month: ['anual','12x R$250', '(R$3000)']
        }
      ],
      schedule: false
    }
  ]

  return (
    <section>
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
        plans.map((each, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='plan__container'>
                <img className='plan__image' alt={`Banner ${each.title}`} src={each.img} />
                <div className='plan__content'>
                  <h2 className='plan__title'>{each.title}</h2>
                  <ul className='plan__items'>
                    {each.desc.map((item, itemIndex) => (
                      <li className='plan__item desc' key={itemIndex}>
                        <img alt='Check Icon' src={checkIcon} />
                        <p>{item}</p>                      
                      </li>
                    ))}
                </ul>              
                <div className='plan__price'>
                  <p className='plan__price__text'>a partir de</p>
                  <p className='plan__price__value'>R${each.inicialValue} mensais</p>
                </div>
                <ul className='plan__items'>
                {
                  each.prices.map((item, i) => (
                    <li key={i} className='plan__item month'>
                      <p>{item.month[0]}</p>
                      <p>
                        {item.month[1]}
                        {item.month[2]}
                      </p>                 
                    </li>
                      ))
                    }
                    </ul>
                {each.schedule ? 
                  <span className='button secondary'>
                    <a href='/'>GRADE DE HORÁRIOS</a>
                  </span> : null}
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Plans