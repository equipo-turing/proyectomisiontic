//La gestion de ventas será nuestro pagina de inicio o index

import agregar from 'media/anadir.png';
import plus_circle from 'media/plus-circle1.png';

import pencil from 'media/pencil1.png';
import 'styles/style_gestionar_vendedor.css';
import { Link } from 'react-router-dom';

const GestionarVendedor =()=>{
    return(
        <section>
            <div className="encabezado_vendedores">
                <Link to='/anadirVendedor'>
                    <div className="contenedorImagen imagen_gestionar">
                        <img src={plus_circle} alt="" />
                    </div>
                </Link>
                <div className="title_vendedor">
                    <h1>GESTIONAR VENDEDORES</h1>
                </div>
            </div>
            <div className="contenedorGestionarVendedores">
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
                            <Link to='/actualizarvendedor'>

                                <div className="contenedorImagen editar"><img src={pencil} alt="" /></div>
                            </Link>
                        </td>


                    </tr>
                    <tr>
                        <td>10527868</td>
                        <td>Ruby Medina</td>
                        <td>Venta de calzado</td>
                        <td>312704055</td>
                        <td>22/09/2021</td>
                        <td>
                            <Link to='/actualizarvendedor'>

                                <div className="contenedorImagen editar"><img src={pencil} alt="" /></div>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>10527868</td>
                        <td>Ruby Medina</td>
                        <td>Venta de calzado</td>
                        <td>312704055</td>
                        <td>22/09/2021</td>
                        <td>
                            <Link to='/actualizarvendedor'>

                                <div className="contenedorImagen editar"><img src={pencil} alt="" /></div>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>
        </section>

    );

}

export default GestionarVendedor;