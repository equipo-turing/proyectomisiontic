import React, {useEffect,useState,useRef} from 'react';
import plus_circle from 'media/plus-circle1.png';
import {actualizarElUsuario} from 'utils/api'
import 'styles/estiloIndex.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ActualizaUsuario = ({ listaUsuarios , actualizaUsuario , setActualizaUsuario , setUsuarios ,identificacionUsuario}) => {
    const form = useRef(null);
    console.log("Desde el actualiza -> ",identificacionUsuario)
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoUsuario = {};
      fd.forEach((value, key) => {
        nuevoUsuario[key] = value;
      });
      await actualizarElUsuario(identificacionUsuario,
      nuevoUsuario,
      (response)=>{
        console.log(response.data);
        toast.success('Vendedor modificado con éxito');
      },(error)=>{
        toast.error('Error modificando el vendedor');
        console.error(error);
      })
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
            <input name='identificacion' className="camposRegistroVenta" type="text" value={identificacionUsuario.identificacion}/>
          </label>      
          <label className="labelCampos" htmlFor="nombre">
              Nombre
            <input name='nombre' className="camposRegistroVenta" type="text" defaultValue={identificacionUsuario.nombre}/>
          </label>

          <label className="labelCampos" htmlFor="rol">
            <select name='rol' defaultValue={identificacionUsuario.rol}>
              <option value='admin'>Admin</option>
              <option value='vendedor'>Vendedor</option>
              <option value='inactivo'>Inactivo</option>
            </select>
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
