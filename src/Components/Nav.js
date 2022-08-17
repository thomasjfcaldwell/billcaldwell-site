import React from 'react';
import logo from '../Images/signature1.transbackground.png';
import '../Styles/NavStyles.scss';

function Nav() {
	return (
		<div className='nav_container'>
			<div className='nav_image-container'>
				<img className='nav_image' alt='hdhdhd' src={logo} />
			</div>
			<div className='nav_links-container'>
				<ul className='nav_links-list'>
					<li className='nav_links-item'>
						<a href='https://www.google.com/'>sssss</a>
					</li>
					<li className='nav_links-item'>
						<a href='https://www.google.com/'>sssss</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
