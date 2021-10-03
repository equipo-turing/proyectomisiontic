import React, {useEffect,useState,useRef} from 'react';
import penciles from 'media/pencil1.png';
import plus_circle from 'media/plus-circle1.png';
import iconoDelete from 'media/delete.png';
import Actualizarvendedor from 'components/ActualizarVendedor'
import 'styles/estiloIndex.css';


const TablaVendedores = ({ listaVendedores , actualizaVendedor , setActualizaVendedor , setVendedores, setMostrarTabla, mostrarTabla }) =>{
    const [identificacionVendedor, setIdentificacionVendedor] = useState();
    const eliminarVendedor =(identificacion)=>{
      let listaVendedoresTemp = [...listaVendedores];
      for(let i=0;i<listaVendedores.length;i++){
        if(listaVendedores[i].identificacion===identificacion){
          listaVendedoresTemp.splice(i, 1);
          break;
        }
      }
      setVendedores([...listaVendedoresTemp])
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
          <Actualizarvendedor listaVendedores={listaVendedores} actualizaVendedor={actualizaVendedor} setActualizaVendedor={setActualizaVendedor} setVendedores={setVendedores} identificacionVendedor={identificacionVendedor}/>
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
                        <td><button onClick={() => actVendedor(vendedor.identificacion)}><img  src={penciles } alt="actualizar vendedor" /></button></td>
                        <td><button onClick={() => eliminarVendedor(vendedor.identificacion)} > <img  src={iconoDelete } alt=" eliminar vendedor" /></button></td>
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
