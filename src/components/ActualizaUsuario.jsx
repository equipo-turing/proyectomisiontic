import React, {useEffect,useState,useRef} from 'react';
import plus_circle from 'media/plus-circle1.png';

import 'styles/estiloIndex.css';
const ActualizaUsuario = ({ listaUsuarios , actualizaUsuario , setActualizaUsuario , setUsuarios ,identificacionUsuario}) => {
    const form = useRef(null);
    console.log("Desde el actualiza -> ",identificacionUsuario)
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoVendedor = {};
      fd.forEach((value, key) => {
        nuevoVendedor[key] = value;
      });
      
      console.log(nuevoVendedor);
      let listaUsuariosTemp = [...listaUsuarios];
      for(let i=0;i<listaUsuarios.length;i++){
        if(listaUsuarios[i].identificacion===identificacionUsuario){
          listaUsuarios[i] = nuevoVendedor;
          break;
        }
      }
      setActualizaUsuario(false);
    };
    return ( 
      <div className="formularioCrearVentas">
        <div className="contenedorTituloRegistroVenta">
          <h1>Actualizar Usuario</h1>                    
        </div>
        <form ref={form} onSubmit={submitForm}>
          <label className="labelCampos" htmlFor="identificacion">
            Identificacion
            <input name='identificacion' className="camposRegistroVenta" type="text" value={identificacionUsuario}/>
          </label>      
          <label className="labelCampos" htmlFor="nombre">
              Nombre
            <input name='nombre' className="camposRegistroVenta" type="text" />
          </label>
  
          <label className="labelCampos" htmlFor="rol">
            Rol
            <input className="camposRegistroVenta" type="text" name='rol' />
          </label>

  
          <div className="contBotonGuardarVenta">     
            <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setActualizaUsuario(false)}>Cancelar</button>
            <button className="botonGuardar" type="submit" value="Guardar">Actualizar</button>
  
          </div>          
  
        </form>
  
      </div>
        
      )
}

export default ActualizaUsuario
