import React, {useEffect,useState,useRef} from 'react';

import 'styles/estiloIndex.css';
import plus_circle from 'media/plus-circle1.png';

const AnadirUsuario = ({setMostrarTabla,listaUsuarios,setUsuarios}) => {
    const form = useRef(null);
    const [codigo,setCodigo]=useState('');
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoVendedor = {};
      fd.forEach((value, key) => {
        nuevoVendedor[key] = value;
      });
      console.log(nuevoVendedor)
      setMostrarTabla(true);
      // Spreed operator
      //setUsuarios([...listaUsuarios,nuevoVendedor])
      
    };
    return ( 
      <div  className="formularioCrearVentas">
        
          <div className="contenedorTituloRegistroVenta">
          <h1>Crear Usuario</h1>                    
          </div>
        <form ref={form} onSubmit={submitForm}>
          <label className="labelCampos" htmlFor="identificacion">
            Identificacion
            <input name='identificacion' className="camposRegistroVenta" type="text" />
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
            <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setMostrarTabla(true)}>Cancelar</button>
            <button className="botonGuardar" type="submit" value="Guardar">Crear</button>
  
          </div>          
  
      </form>
  
      </div>
    )
}

export default AnadirUsuario
