//La gestion de ventas será nuestro pagina de inicio o index
import chulito from 'media/chulito.png';
import agregar from 'media/anadir.png';

const GestionarVendedor =()=>{
    return(
        <section>
            <div className="encabezado_vendedores">
                <div className="contenedorImagen imagen_gestionar">
                    <img src={agregar} alt="" />
                </div>
                <div className="title_vendedor">
                    <h1>GESTIONAR VENDEDORES</h1>
                </div>
            </div>
            <div className="color_tabla">
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
                        <td><div className="contenedorImagen"><img src={chulito} alt="" /></div></td>
                    </tr>
                    <tr>
                        <td>10527868</td>
                        <td>Ruby Medina</td>
                        <td>Venta de calzado</td>
                        <td>312704055</td>
                        <td>22/09/2021</td>
                        <td><div className="contenedorImagen"><img src={chulito} alt="" /></div></td>
                    </tr>
                    <tr>
                        <td>10527868</td>
                        <td>Ruby Medina</td>
                        <td>Venta de calzado</td>
                        <td>312704055</td>
                        <td>22/09/2021</td>
                        <td className='td_actualizar'><div className="contenedorImagen"><img src={chulito} alt="" /></div></td>
                    </tr>
                </table>
            </div>
        </section>

    );

}

export default GestionarVendedor;