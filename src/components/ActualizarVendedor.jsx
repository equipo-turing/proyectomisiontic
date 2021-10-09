import React, {useEffect,useState,useRef} from 'react';
import plus_circle from 'media/plus-circle1.png';
import axios from 'axios';

import 'styles/estiloIndex.css';
const Actualizarvendedor =({ listaVendedores , actualizaVendedor , setActualizaVendedor , setVendedores ,identificacionVendedor,setEjecutarConsulta})=>{
    const form = useRef(null);
    console.log("Desde el actualiza -> ",identificacionVendedor)
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoVendedor = {};
      fd.forEach((value, key) => {
        nuevoVendedor[key] = value;
      });
      const options = {
        method: 'PATCH',
        url: `http://localhost:5000/vendedores/${identificacionVendedor._id}/`,
        headers: { 'Content-Type': 'application/json' },
        data: nuevoVendedor,
      };
      await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //toast.success('Vehículo modificado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        //toast.error('Error modificando el vehículo');
        console.error(error);
      });
      setActualizaVendedor(false);
    };
    return ( 
      <div className="formularioCrearVentas">
        <div className="contenedorTituloRegistroVenta">
          <h1>Actualizar Vendedor</h1>                    
        </div>
        <form ref={form} onSubmit={submitForm}>
          <label className="labelCampos" htmlFor="identificacion">
            Identificacion
            <input name='identificacion' className="camposRegistroVenta" type="text" value={identificacionVendedor.identificacion}/>
          </label>      
          <label className="labelCampos" htmlFor="nombre">
              Nombre
            <input name='nombre' className="camposRegistroVenta" type="text" defaultValue={identificacionVendedor.nombre} />
          </label>
  
          <label className="labelCampos" htmlFor="especialidad">
            especialidad
            <input className="camposRegistroVenta" type="text" name='especialidad' defaultValue={identificacionVendedor.especialidad} />
          </label>
  
          <label className="labelCampos"  htmlFor="telefono">
            telefono
            <input name='telefono' className="camposRegistroVenta" type="number" defaultValue={identificacionVendedor.telefono}/>
          </label>
  
          <label className="labelCampos"  htmlFor="fecha_ingreso">
            Fecha Ingreso
            <input name='fecha_ingreso' className="camposRegistroVenta" type="date" defaultValue={identificacionVendedor.fecha_ingreso}/>
          </label>
  
          <div className="contBotonGuardarVenta">     
            <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setActualizaVendedor(false)}>Cancelar</button>
            <button className="botonGuardar" type="submit" value="Guardar">Actualizar</button>
  
          </div>          
  
        </form>
  
      </div>
        
      )
}

export default Actualizarvendedor;
