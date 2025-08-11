import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Title from '../common/Title'


function Galery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./images.json')
      .then(response => response.json())
      .then(datos => setData(datos))
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  return (
    <div className='galery-container'>
      <Title text="Trabajos realizados"/>
      <Carousel data-bs-theme="dark" fade>
        {data.map((data) => (
          <Carousel.Item>
            <img className="photo img-responsive d-block w-100"
              src={data.photo} alt={data.title} />
            <Carousel.Caption>
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
export default Galery;