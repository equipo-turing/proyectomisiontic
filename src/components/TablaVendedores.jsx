import React, {useEffect,useState,useRef} from 'react';
import penciles from 'media/pencil1.png';
import plus_circle from 'media/plus-circle1.png';
import iconoDelete from 'media/delete.png';
import Actualizarvendedor from 'components/ActualizarVendedor'
import 'styles/estiloIndex.css';

import axios from 'axios';

const TablaVendedores = ({ listaVendedores , actualizaVendedor , setActualizaVendedor , setVendedores, setMostrarTabla, mostrarTabla ,setEjecutarConsulta}) =>{
    const [identificacionVendedor, setIdentificacionVendedor] = useState();
    const eliminarVendedor = async (id)=>{
      const options = {
        method: 'DELETE',
        url: `http://localhost:5000/vendedores/${id}/`,
        headers: { 'Content-Type': 'application/json' },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          //toast.success('vehículo eliminado con éxito');
          setEjecutarConsulta(true);
        })
        .catch(function (error) {
          console.error(error);
          //toast.error('Error eliminando el vehículo');
        });
    }

    
    const actVendedor =(identificacion)=>{
      console.log("Identificacion => ",identificacion)
      for(let i=0;i<listaVendedores.length;i++){
        console.log('indice = >',i," -> ",listaVendedores[i]);
      }
      setIdentificacionVendedor(identificacion);
      setActualizaVendedor(!actualizaVendedor);
    }
    
    return (
      <section>
        {actualizaVendedor ? (
          <Actualizarvendedor listaVendedores={listaVendedores} actualizaVendedor={actualizaVendedor} setActualizaVendedor={setActualizaVendedor} setVendedores={setVendedores} identificacionVendedor={identificacionVendedor} setEjecutarConsulta={setEjecutarConsulta}/>
          ) : (
          <div>
                <div>
                  <div className="contenedorImagenTitulo">                
                    <div className="iconoVentas">
                      <button 
                        onClick={() => {
                          setMostrarTabla(!mostrarTabla);
                        }}
                      ><img src={plus_circle} alt="" /></button>
                    </div>
                  
                    <div className="tituloGestionarVenta">
                      <h1>GESTIONAR VENDEDORES</h1>
                    </div>
                  </div>
                </div>
            <div className='contenedorTablaVentas'>
              <table>
                <thead className="encabezadoTablaVentas">
                  <tr>
                    <th>Identificacion</th>
                    <th>Nombre</th>
                    <th>Especialidad</th>
                    <th>Telefono</th>
                    <th>Fecha de Ingreso</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {listaVendedores.map((vendedor) => {
                    return (
                      <tr >
                        <td>{vendedor.identificacion}</td>
                        <td>{vendedor.nombre}</td>
                        <td>{vendedor.especialidad}</td>
                        <td>{vendedor.telefono}</td>
                        <td>{vendedor.fecha_ingreso}</td>
                        <td><button onClick={() => actVendedor(vendedor)}><img  src={penciles } alt="actualizar vendedor" /></button></td>
                        <td><button onClick={() => eliminarVendedor(vendedor._id)} > <img  src={iconoDelete } alt=" eliminar vendedor" /></button></td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
          )}
        
      </section>
      );
}

export default TablaVendedores;
