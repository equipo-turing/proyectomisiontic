//La gestion de ventas será nuestro pagina de inicio o index

const GestionarVendedor =()=>{
    return(
        <section>
            <h1>GESTIONAR VENDEDORES</h1>
            <table>
                <tr>
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
                    <td><button>Actualizar</button></td>
                </tr>

            </table>
        </section>

    );

}

export default GestionarVendedor;