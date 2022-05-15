import React from 'react';
import '../stylesheets/Testimony.css'


 function Testimony(){
	return(
		<div className='testimony_container'>
			<img  className='testimony_image'
			src={require('../images/avatar1.webp')}
			alt='CEO picture'
			/>
			<div className="text_content_container">
				<p className='testimony_name'>Jhon Doe in Dallas</p>
				<p className='testimony_profession'>Softare Enginner at Amazon</p>
				<p className="testimony_text">"When I learned to program I felt that I discovered super power, however, my learning journey has been full of ups and downs because there are so many resources and learning path to take that sometimes I found myself trying to learn many different technologies and library at the same time. Until I met Ivan who coach me to learn and master one thing at a time."</p>
			</div>
		</div>
	);
}

export default Testimony;