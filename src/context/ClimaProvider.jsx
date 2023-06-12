
import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState(
        {
            ciudad: '',
            pais: '',
        }
    )

    const datosBusqueda = e => {
        setBusqueda(
            {
                ...busqueda,
                [e.target.name]: e.target.value
            }
        )
    }

    const [resultadoClima, setResultadoClima] = useState({})

    const consultarClima =async datos => {
        try {

            // Obtener latitud y longitud de localzación
            const {ciudad, pais} = datos
            const appId = import.meta.env.VITE_API_KEY
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            //Consultar la API
           const {data} = await axios(url)
           const {lat, lon} = data[0]

           //Obtener datos del clima
           const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            //Consultar API, extrae data: renombra como clima
            const {data: clima} =await axios(urlClima)
            setResultadoClima(clima)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultadoClima
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export{
    ClimaProvider
}

export default ClimaContext