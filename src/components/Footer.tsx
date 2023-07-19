import React from 'react'
import instagram from '../assets/images/socials-instagram.svg';
import whatsapp from '../assets/images/socials-whatsappB.svg';

const Footer = () => {
  return (
    <section className='footer__content container'>
			<div className='footer__contact'>
				<h1 className='footer__title'>Contatos</h1>
				<div className='footer__text'>
					<p className='footer__subtitle'>Endereço</p>
					<p className='footer__desc'>RUA DOS CAETÉS, 283, PERDIZES</p>
					<p className='footer__desc'>SÃO PAULO, SP</p>
				</div>
				<div className='footer__text'>
					<p className='footer__subtitle'>Telefone</p>
					<p className='footer__desc'>11 98765-4321</p>
				</div>
				<div className='footer__text'>
					<p className='footer__subtitle'>Redes</p>
					<p className='footer__desc'><img className='footer__image' alt='Whats App' src={whatsapp} />11 98765-4321</p>
					<p className='footer__desc'><img className='footer__image' alt='Instagram' src={instagram} />@gym</p>
				</div>
			</div>
			<div className='footer__map'>
			</div>
		</section>
  )
}

export default Footer