import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImages from './CarouselImages';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.js';

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <div className="image-container">
            <CarouselImages text="First slide" 
            imageUrl={require('../imagenes/Carousel1.png')} />
        </div>
        <Carousel.Caption>
          <h3>   </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="image-container">
            <CarouselImages text="Second slide"  
            imageUrl={require('../imagenes/Carousel2.png')} />
        </div>
        <Carousel.Caption>
          <h3>  </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="image-container">
            <CarouselImages text="Second slide"  
            imageUrl={require('../imagenes/Carousel3.png')} />
        </div>
        <Carousel.Caption>
          <h3>  </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;