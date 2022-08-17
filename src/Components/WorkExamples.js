import React from 'react';
import '../Styles/WorkExamplesStyles.scss';
import workExamples from '../Data/Data';

function WorkExamples() {
	return (
		<div className='work-examples_container'>
			{workExamples.map((work) => {
				return (
					<div key={work.id} className='work-examples_card'>
						<h5 className='work-examples_title'>{work.title}</h5>
						<p className='work-examples_description'>{work.description}</p>
						<img
							src={work.image}
							alt='work example header'
							className='work-examples_image'
						/>
					</div>
				);
			})}
		</div>
	);
}

export default WorkExamples;
