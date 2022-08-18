import React from 'react';
import '../Styles/GalleryStyles.scss';

import galleryImages from '../Data/Images';
function Gallery() {
	return (
		<div className='gallery_container'>
			<div className='gallery_row-1'>
				{galleryImages.slice(0, 2).map((images) => {
					return (
						<div className='gallery_image-container'>
							<img src={images.images} alt='dddd' className='gallery_image' />
						</div>
					);
				})}
			</div>
			<div className='gallery_row-2'>
				{galleryImages.slice(2, 4).map((images) => {
					return (
						<div className='gallery_image-container'>
							<img src={images.images} alt='dddd' className='gallery_image' />
						</div>
					);
				})}
			</div>
			<div className='gallery_row-3'>
				{galleryImages.slice(4, 6).map((images) => {
					return (
						<div className='gallery_image-container'>
							<img src={images.images} alt='dddd' className='gallery_image' />
						</div>
					);
				})}
			</div>
			<div className='gallery_row-4'>
				{galleryImages.slice(6, 8).map((images) => {
					return (
						<div className='gallery_image-container'>
							<img src={images.images} alt='dddd' className='gallery_image' />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Gallery;
