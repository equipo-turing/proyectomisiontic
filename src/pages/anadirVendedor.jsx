const AnadirVendedor =()=>{
    return(
        <div>
            <div>
               
            </div>
            <div className="actualizar_usuario">
                
                    <form className="formulario_act">
                        <h2>Añadir Vendedor</h2>
                        
                        <span>Identificacion:10583868</span>
                        <br />
                        <label for="fname">Nombre      </label>
                        <input type="text" id="fname" name="fname"/>
                        <br />
                        <label for="especialidad">Especialidad</label>
                        <input type="text" id="especialidad" name="especialidad"/>
                        <br />
                        <label for="telefono">Telefono     </label>
                        <input type="text" id="telefono" name="telefono"/>
                        <br />
                        <label for="fecha_ingreso">Fecha Ingreso</label>
                        <input type="date" id="fecha_ingreso" name="lname"/>
                    </form>
                
            </div>
        </div>
    );
  }
  
  export default AnadirVendedor;
  