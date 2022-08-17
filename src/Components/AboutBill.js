import React from 'react';

import '../Styles/AboutBillStyles.scss';
import CarouselSlider from '../Components/CarouselSlider';

import billOnBike from '../Images/Billlandscape.png';

function AboutBill() {
	return (
		<>
			<div className='about-bill_container'>
				<div className='about-bill_title-container'>
					<h2 className='about-bill_title'>About Bill</h2>
				</div>
				<div className='about-bill_image-container'>
					<img
						src={billOnBike}
						className='about-bill_image'
						alt='bill on a bike'
					/>
				</div>
				<div className='about-bill_text-container'>
					<p className='about-bill_text'>
						It was an easy image.. I remember it clearly.Just a black filled- in
						pointy thing.No frills. My material got lighter with time - thank
						goodness- and after about 20 years it gave me a living.First in
						advertising then syndicating material through the Press Association
						to provincial newspapers in Britain . I also syndicated to the
						English- speaking world:Canada, Australia, New Zealand and India.An
						agent in the US got my work into South and Central America. This is
						all pre- digital age. If I ever find any thing from that time I’ll
						put it up here.The Daily Star launched in 1978 with me as
						cartoonist.Later I worked for the Sunday Mail in Scotland, the Sun
						and several magazines.These days I enjoy working for the Church
						Times and Yachting Monthly. Boats I know about. Church not so much
						but they show great patience with this heretic on board giving a
						bitof balance
					</p>
				</div>
				<div>{/* <CarouselSlider /> */}</div>
			</div>
		</>
	);
}

export default AboutBill;
