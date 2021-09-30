
import agregar from "media/plus-circle1.png";

 //import { Link } from 'react-router-dom';
 import 'styles/styles.css';


const gestionarUsuario =()=>{
  return(
    <div className="imagenBoton" >
       <img src={agregar} alt="imagen" width="50" height="50"  />     
         <div className="usuarios">
                    <h4>GESTIONAR USUARIOS</h4>
              
                <table>
                    <tr className="encabezado_tabla">
                        <th>Identificacion</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Telefono</th>
                        <th>Fecha de Ingreso</th>
                        <th>Actualizar</th>
                    </tr>
                    <tr>
                        <td>10527868</td>
                        <td>Ruby Medina</td>
                        <td>Venta de calzado</td>
                        <td>312704055</td>
                        <td>22/09/2021</td>
                        <td>
            
                        </td>
                    </tr>
                    <tr>
                        <td>12345678</td>
                        <td>Santiago valencia</td>
                        <td>Venta de calzado</td>
                        <td>312456789</td>
                        <td>22/10/2021</td>
                        <td>
            
                        </td>
                    </tr>
                </table>
                </div>

                </div>
                                                             
  );
}
export default gestionarUsuario;