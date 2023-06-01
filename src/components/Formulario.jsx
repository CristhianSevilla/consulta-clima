
const Formulario = () => {
    return (
        <div className="contenedor">
            <form>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                    />
                </div>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select
                        name="pais"
                        id="pais"
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