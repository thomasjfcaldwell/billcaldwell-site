import React from 'react';
import '../Styles/HeroStyles.scss';

import BillCartoon from '../Images/bill.transparentbackground.png';
import DogCartoon from '../Images/dog.transparentbackground.png';

function Hero() {
	return (
		<div className='hero_container'>
			<ul className='hero_list'>
				<li className='hero_list-item'>Cartoonist</li>
				<li className='hero_list-item'>Illustrator</li>
				<li className='hero_list-item'>Dog Owner</li>
			</ul>
			<div className='hero_images-container'>
				<img src={BillCartoon} className='hero_image' alt='' />
				<img src={DogCartoon} className='hero_image' alt='' />
			</div>
			<div className='hero_link-container'>
				<a href='https://www.google.com/' className='hero_link'>
					<p className='hero_link-text'>See More About Bill</p>
				</a>
			</div>
		</div>
	);
}

export default Hero;
