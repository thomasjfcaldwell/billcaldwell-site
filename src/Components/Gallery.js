import React from 'react';
import '../Styles/GalleryStyles.scss';

import galleryImages from '../Data/Images';
function Gallery() {
	return (
		<div className='gallery_container'>
			{galleryImages.map((image) => {
				return (
					<div key={image.id}>
						<img className='gallery_image' src={image.images} alt='cartoon' />
					</div>
				);
			})}
		</div>
	);
}

export default Gallery;
