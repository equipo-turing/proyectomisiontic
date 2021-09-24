const AnadirVendedor =()=>{
    return(
        <div>
            <div>
                <h2>Añadir Vendedor</h2>
            </div>
            <div>
                <span>Identificacion:10583868</span>
                <form>
                    <label for="fname">Nombre</label>
                    <input type="text" id="fname" name="fname"/>
                    <br />
                    <label for="lname">Especialidad</label>
                    <input type="text" id="lname" name="lname"/>
                    <br />
                    <label for="lname">Telefono</label>
                    <input type="text" id="lname" name="lname"/>
                    <br />
                    <label for="lname">Fecha Ingreso</label>
                    <input type="date" id="lname" name="lname"/>
                </form>
            </div>
        </div>
    );
  }
  
  export default AnadirVendedor;
  