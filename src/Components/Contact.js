import React from 'react';
import '../Styles/ContactStyles.scss';

const emailPhoto =
	'https://res.cloudinary.com/djjqsmlei/image/upload/v1653009839/billself.5.18.sm_yx7w0p.png';
const linkdinPhoto =
	'https://res.cloudinary.com/djjqsmlei/image/upload/v1653009839/dogSelf5.18.sm_p7msym.png';

function Contact() {
	return (
		<div className='contact_container'>
			<div className='contact_content-container'>
				<h5 className='contact_email-title'>EMAIL</h5>
				<div className='contact_image-container'>
					<img src={emailPhoto} className='contact_image' alt='Bill' />
				</div>
				<a href='mailto:thomasjfcaldwell@gmail.com'>
					<p>bill@billcaldwell.com</p>
				</a>
			</div>
			<div className='contact_content-container'>
				<h5 className='contact_linkedin-title'>LINKEDIN</h5>
				<div className='contact_image-container'>
					<img src={linkdinPhoto} className='contact_image' alt='dog' />
				</div>
				<a href='www.linkedin.com'>
					<p>Bill Caldwell</p>
				</a>
			</div>
		</div>
	);
}

export default Contact;
