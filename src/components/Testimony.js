import React from 'react';
import '../stylesheets/Testimony.css'


 function Testimony(props){
	return(
		<div className='testimony_container'>
			<img  className='testimony_image'
			src={require(`../images/${props.imageURL}.webp`)}
			alt='CEO picture'
			/>
			<div className="text_content_container">
				<p className='testimony_name'>{props.name} in {props.country}</p>
				<p className='testimony_profession'>{props.profession} at {props.company}</p>
				<p className="testimony_text">{props.testimony}</p>
			</div>
		</div>
	);
}

export default Testimony;