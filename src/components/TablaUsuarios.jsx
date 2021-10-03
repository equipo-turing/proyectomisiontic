import React, {useEffect,useState,useRef} from 'react';
import plus_circle from 'media/plus-circle1.png';
import ActualizaUsuario from 'components/ActualizaUsuario'
import 'styles/estiloIndex.css';

const TablaUsuarios = ({ listaUsuarios , actualizaUsuario , setActualizaUsuario , setUsuarios, setMostrarTabla, mostrarTabla }) => {
    const [identificacionUsuario, setIdentificacionUsuario] = useState();
    
    const eliminaUsuario =(identificacion)=>{
      let listaUsuariosTemp = [...listaUsuarios];
      for(let i=0;i<listaUsuarios.length;i++){
        if(listaUsuarios[i].identificacion===identificacion){
          listaUsuariosTemp.splice(i, 1);
          break;
        }
      }
      setUsuarios([...listaUsuariosTemp])
    }

    
    const actUsuario =(identificacion)=>{
      console.log("Identificacion => ",identificacion)
      for(let i=0;i<listaUsuarios.length;i++){
        console.log('indice = >',i," -> ",listaUsuarios[i]);
      }
      console.log(actualizaUsuario)
      setIdentificacionUsuario(identificacion);
      setActualizaUsuario(true);
    }
    
    return (
      <section>
        {actualizaUsuario ? (
          <ActualizaUsuario listaUsuarios={listaUsuarios} actualizaUsuario={actualizaUsuario} setActualizaUsuario={setActualizaUsuario} setUsuarios={setUsuarios} identificacionUsuario={identificacionUsuario}/>
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
                    <th>Rol</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {listaUsuarios.map((usuario) => {
                    return (
                      <tr >
                        <td>{usuario.identificacion}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.rol}</td>
                        <td><button onClick={() => actUsuario(usuario.identificacion)}>Actualizar</button></td>
                        <td><button onClick={() => eliminaUsuario(usuario.identificacion)}>Eliminar</button></td>
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

export default TablaUsuarios;
