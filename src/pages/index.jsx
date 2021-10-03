//La gestion de ventas será nuestro pagina de inicio o index
import { Link } from 'react-router-dom';
import plus_circle from 'media/plus-circle1.png';
import 'styles/estiloIndex.css';

const Index =()=>{

    return(
        <section>
            <div className="contenedorImagenTitulo">
                
                <Link to='/formularioCrearVenta'> 
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>5.700.600</td>
                        <td>22/09/2021</td>
                        <td>22/10/2021</td>
                        <td>Andres Rojas</td>
                        <td>Venta Zapatos</td>                        
                    </tr>
                    <tr>
                        <td>2358</td>
                        <td>300.000</td>
                        <td>28/09/2021</td>
                        <td>30/10/2021</td>
                        <td>Ruby Medina</td>
                        <td>Venta Pantalon</td>                        
                    </tr>
                    <tr>
                        <td>00989</td>
                        <td>150.000</td>
                        <td>22/10/2021</td>
                        <td>22/11/2021</td>
                        <td>Fabian Caicedo</td>
                        <td>Venta Bolso Cuero</td>                        
                    </tr>
                    <tr>
                        <td>0098888</td>
                        <td>450.000</td>
                        <td>2/10/2021</td>
                        <td>2/11/2021</td>
                        <td>Diana Tobón</td>
                        <td>Venta Blusa</td>                        
                    </tr>

                </tbody>

                
            </table>

            </div>
           
        </section>

    );

}

export default Index;