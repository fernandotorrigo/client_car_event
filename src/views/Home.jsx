import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from '../react-awesome-slider/src/styles.scss';
import '../styles.css'

import car1 from '../views/cars/car-1.jpg'
import car2 from '../views/cars/car-2.jpg'
import car3 from '../views/cars/car-3.jpg'
import car4 from '../views/cars/car-4.jpg'

const slider = (
  <AwesomeSlider cssModule={AwsSliderStyles}>
    <div data-src={car1} />
    <div data-src={car2} />
    <div data-src={car3} />
    <div data-src={car4} />
  </AwesomeSlider>
);
const Home = (props) => {
	return (
		<div className='Home'>
			<h5>Venha conferir o festival de eventos de carros</h5>
			{slider}
		</div>
	)
}

export default Home