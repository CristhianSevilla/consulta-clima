import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Spinner from "./Spinner"

const AppClima = () => {

  const { resultadoClima, spinner, sinresultados } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {/* Cargar el Spinner y Comprobamos que el objeto del clima tenga datos */}
        {
          spinner ? <Spinner />
            : resultadoClima?.name ? <Resultado />
              : sinresultados ? <p className="contenedor noResulatos">{sinresultados}</p> :
                ''
        }
      </main>
    </>
  )
}

export default AppClima