import { useState, useEffect } from "react";

function carList() {
    const [car, setCar] = useState([]); // Estado para almacenar los datos de los autos
  
    useEffect(() => {
      // Función asincrónica para realizar el fetch
      async function fetchData() {
        try {
          const response = await fetch('src/data/carDB.json'); // Ruta al archivo JSON
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(response);
          console.log(data);
          setCar(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData(); // Llama a la función de fetch cuando el componente se monta
  
      // Limpieza: detiene el fetch cuando el componente se desmonta
      return () => {
        // Cancela la solicitud de fetch si es necesario
      };
    }, []);
  
    return (
      <div>
        <h1>Lista de Marcas de Autos</h1>
        <ul>
          {car.map((auto, index) => (
            <li key={index}>
              <h2>{auto.marca}</h2>
              <p>Modelo: {auto.modelo}</p>
              <p>Color: {auto.color}</p>
              <p>Precio: {auto.precio}</p>
              <img src={`/src/assets/img-auto-${index + 1}.jpg`} alt={`${auto.marca} - ${auto.modelo}`} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default carList;
  
