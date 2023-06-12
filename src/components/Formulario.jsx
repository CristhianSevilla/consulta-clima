import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {

    const [alerta, setAlerta] = useState('')
    const {busqueda, datosBusqueda, consultarClima} = useClima()
    const {ciudad, pais} = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        //validacion
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos lo campos son obligatorios')
            return
        }

        consultarClima(busqueda)
    }

    return (
        <div className="contenedor">

            {alerta && <p>{alerta}</p>}

            <form 
             onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={ciudad}
                        onChange={datosBusqueda}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={datosBusqueda}
                    >
                        <option value="">Seleccione un país</option>
                        <option value="AR">Argentina</option>
                        <option value="BR">Brasil</option>
                        <option value="CA">Canadá</option>
                        <option value="CL">Chile</option>
                        <option value="CO">Colombia</option>
                        <option value="EC">Ecuador</option>
                        <option value="ES">España</option>
                        <option value="US">Estados Unidos</option>
                        <option value="FR">Francia</option>
                        <option value="IT">Italia</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>            

                    </select>
                </div>

                <input 
                type="submit" 
                value="Consultar Clíma"
                />

            </form>
        </div>
    )
}

export default Formulario