import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import musculacao from '../assets/images/modalidade-musculacao.svg';
import boxe from '../assets/images/modalidade-boxe.svg';
import jiujitsu from '../assets/images/modalidade-jiujitsu.svg';
import muaythai from '../assets/images/modalidade-muaythai.svg';

// const Modalities = ({title, img}: {title: string, img: string}) => {
// 	return (
// 		<>
// 			<SwiperSlide>
// 				<div className='modalities__item'>
// 					<img alt={`Modalidade ${title}`} src={img} />
// 					<p className='modalities__subtitle text--desc'>{ title }</p>
// 				</div>        
// 			</SwiperSlide>
// 		</>
// 	)
// }

const Modalities = () => {
	return (
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
				slidesPerView: 2,
				spaceBetween: 15,
			}
		}}
		modules={[Navigation]}
		className="mySwiper"
	>
		<SwiperSlide>
			<div className='modalities__item'>
				<img alt="Modalidade musculação" src={musculacao} />
				<p className='modalities__subtitle text--desc'>Musculação</p>
			</div>        
		</SwiperSlide>
		<SwiperSlide>
			<div className='modalities__item'>
				<img alt="Modalidade boxe" src={boxe} />
				<p className='modalities__subtitle text--desc'>Boxe</p>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className='modalities__item'>
				<img alt="Modalidade jiujitsu" src={jiujitsu} />
				<p className='modalities__subtitle text--desc'>Jiu Jitsu</p>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className='modalities__item'>
				<img alt="Modalidade muaythai" src={muaythai} />
				<p className='modalities__subtitle text--desc'>Muay Thai</p>
			</div>
		</SwiperSlide>
		</Swiper> 
	)
}

export default Modalities