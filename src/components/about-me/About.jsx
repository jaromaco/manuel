import React, { useState, useEffect } from "react";
import Basic from "./Cualidades";
import Retrato from "./Retrato";


export default function About () {

  const [ data, setData ] = useState([]);

  useEffect(()=>{
    fetch('./cualidades.json')
    .then(response => response.json())
    .then(datos => setData(datos))
    .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <>  
        <div className="about-container">
          <Retrato />
          <div className="cualidades">
            
            {data.map((item, index) => (
            <Basic key= {index} icon = {item.icon} title={item.title} text={item.text} />
            )
            )}
          </div>
        </div>
    </>
  );
}