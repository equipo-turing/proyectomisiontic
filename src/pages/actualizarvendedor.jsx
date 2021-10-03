
import React, {useEffect,useState} from 'react';
import "styles/estiloFormularioVenta.css";
const Actualizarvendedor =()=>{
  const [codigo,setCodigo]=useState('');
  useEffect(()=>{
      console.log("este es el codio: ",codigo);

  },[]);

  const metodo=()=>{
      console.log("este es el codio: ",codigo);
  }
  return ( 
   
            
          <div className="formularioCrearVentas">
              <div className="contenedorTituloRegistroVenta">
              <h1>Actualizar Vendedor</h1>                    
              </div>
              <form >
                          
              <label className="labelCampos" htmlFor="nombre">
                  Nombre
              <input onChange={(e)=>{
                  setCodigo(e.target.value);

              }} className="camposRegistroVenta" type="text" />
              </label>

              <label className="labelCampos" htmlFor="especialidad">
              especialidad
              <input className="camposRegistroVenta" type="text" />
              </label>

              <label className="labelCampos"  htmlFor="telefono">
              telefono
              <input className="camposRegistroVenta" type="number" />
              </label>

              <label className="labelCampos"  htmlFor="fechaingreso">
                  Fecha Ingreso
              <input className="camposRegistroVenta" type="date" />
              </label>

              <div className="contBotonGuardarVenta">
              <input className="botonCancelar" type="submit" value="Cancelar" />
              <input type="button" onClick={metodo} className="botonGuardar"  value="Guardar" />           

              </div>          

          </form>

          </div>
          
    
    )
  }
  
  export default Actualizarvendedor;
  