
import 'styles/actualiza_vendedor.css'
const Actualizarvendedor =()=>{
    return (<div className="contenedorForm">
      <form className="formulario" action="">
        <h1>Actualizar vendedor</h1>
        <span>10002313</span>
        <div className="datosLlenar">
          <div className="row">
            <label htmlFor="nombre">
              Nombre
            </label>
            <input type="text" />
          </div>
          <div className="row">
            <label htmlFor="especialidad">
              especialidad
            </label> 
            <input type="text" />
               
          </div>

          <div className="row">
            <label htmlFor="telefono">
              telefono
            </label>  
            <input type="text" />
              
            
          </div>
        </div>
      </form>
    </div>);
  }
  
  export default Actualizarvendedor;
  