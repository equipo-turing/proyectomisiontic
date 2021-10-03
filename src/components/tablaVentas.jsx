import React from 'react'
import plus_circle from 'media/plus-circle1.png';
import iconoDelete from 'media/delete.png';
import penciles from 'media/pencil1.png';
import { Link } from 'react-router-dom';



const TablaVentas=({listaVenta})=>{

    return (
        <section>
            <div className="contenedorImagenTitulo">
                
                <Link to='/formularioCrearVenta' > 
                <div className="iconoVentas">
                <img  src={plus_circle} alt="Crear Venta" />
               </div>        
                         
                </Link>
                           
                <h1 className="tituloGestionarVenta">LISTADO DE VENTAS</h1>                

            </div>         
            
            
            <div className="contenedorTablaVentas">
            <table>
                <thead className="encabezadoTablaVentas">
                    <tr>
                        <th>Código</th>
                        <th>Valor Venta</th>
                        <th>Fecha Venta</th>
                        <th>Fecha Pago</th>
                        <th>Responsable</th>
                        <th>Descripción</th>
                        <th>Actualizar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                  
               
                    {listaVenta.map((venta)=>{
                        return (
                            <tr>
                                <td>{venta.codigo}</td>
                                <td>{venta.valorVenta}</td>
                                <td>{venta.fechaVenta}</td>
                                <td>{venta.fechaPago}</td>
                                <td>{venta.responsable}</td>
                                <td>{venta.descripcion}</td>
                                <td className="iconoElminarActualizar"> 
                                  <Link to='/actualizarVenta' > 
                                    <img  src={penciles } alt="actualizar usuario" />
                                  </Link>                                
                                </td>
                                <td className="iconoElminarActualizar">  <img  src={iconoDelete } alt=" eliminar usuario" /></td>                       
                            </tr>
                        )                      

                    })}                   

                </tbody>                
            </table>
      


            </div>
            
           
        </section>
    )

}


export default TablaVentas;
