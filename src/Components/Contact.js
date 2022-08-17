import React from 'react';
import '../Styles/ContactStyles.scss';

function Contact() {
	return (
		<div className='contact_container'>
			<div className='contact_content-container'>
				<h5 className='contact_email-title'>EMAIL</h5>
				<div className='contact_email-image-container'>
					<img className='contact_email-image' href='' alt='Bill' />
				</div>
				<a href='mailto:thomasjfcaldwell@gmail.com'>
					<p>bill@billcaldwell.com</p>
				</a>
			</div>
			<div className='contact_content-container'>
				<h5 className='contact_linkedin-title'>LINKEDIN</h5>
				<div className='contact_linkedin-image-container'>
					<img className='contact_linkedin-image' href='' alt='dog' />
				</div>
				<a href='www.linkedin.com'>
					<p>Bill Caldwell</p>
				</a>
			</div>
		</div>
	);
}

export default Contact;
