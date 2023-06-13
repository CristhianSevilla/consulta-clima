import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultadoClima, sinResultados } = useClima()

  const { name, main } = resultadoClima

  return (
    <div className="contenedor">
      {sinResultados ? <p className="alerta">{sinResultados}</p> :
        <>
          <div className="clima">
            <h2>El clima de {name} es de:</h2>
            <p>
              {parseInt(main.temp)}<span>&#8451;</span>
            </p>

            <div className="tem-min-max">
              <p>
                Min: {parseInt(main.temp_min)}<span>&#8451;</span>
              </p>
              <p>
                Máx: {parseInt(main.temp_max)}<span>&#8451;</span>
              </p>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default Resultado