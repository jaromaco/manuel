// Services.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 1. Importa useParams
import Contents from './Contents';

function Services() {
  // 2. Mueve los hooks dentro del componente
  const [serviceData, setServiceData] = useState(null); // Almacenará solo el servicio encontrado
  const { servicio } = useParams(); // Obtiene el nombre del servicio de la URL, ej: "poda-en-altura"

  useEffect(() => {
    fetch('/services.json') // Es mejor usar la ruta desde la raíz
      .then(response => response.json())
      .then(datos => {
        // 3. Busca el servicio específico que coincida con el parámetro de la URL
        const currentService = datos.find(item => item.title === servicio);
        setServiceData(currentService);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [servicio]); // El efecto se ejecuta de nuevo si el 'servicio' en la URL cambia

  // 4. Muestra un mensaje de carga o si no se encuentra el servicio
  if (!serviceData) {
    return <p>Cargando servicio...</p>;
  }

  // 5. Renderiza el componente Contents con los datos del servicio encontrado
  return (
    <>
      <div className="services-container">
        <div className='centrando'>
        <Contents photo={serviceData.photo} title={serviceData.title} text={serviceData.text} />
        </div>
      </div>
    </>
  );
}

export default Services;