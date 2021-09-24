//La gestion de ventas será nuestro pagina de inicio o index
import chulito from 'media/chulito.png';

const GestionarVendedor =()=>{
    return(
        <section>
            <div className="encabezado_vendedores">
                <h1>GESTIONAR VENDEDORES</h1>
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