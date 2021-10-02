//La gestion de ventas será nuestro pagina de inicio o index
import React, {useEffect,useState} from 'react';

import agregar from 'media/anadir.png';
import plus_circle from 'media/plus-circle1.png';

import pencil from 'media/pencil1.png';

import { Link } from 'react-router-dom';
import 'styles/estiloIndex.css';

let vendedoresBackend = [
    {identificacion:"12123",nombre:"andres",especialidad:"Venta de calzado",telefono:"1331",fecha_ingreso:"22/09/2021"},
    {identificacion:"213123",nombre:"walter",especialidad:"Venta de ropa",telefono:"231321",fecha_ingreso:"21/09/2021"},
    {identificacion:"4112",nombre:"fabian",especialidad:"Venta de manillas",telefono:"123123",fecha_ingreso:"20/09/2021"},
    {identificacion:"3412",nombre:"diana",especialidad:"Venta de electrodomesticos",telefono:"12312",fecha_ingreso:"19/09/2021"},
    {identificacion:"56531",nombre:"ruby",especialidad:"Venta de celulares",telefono:"123341",fecha_ingreso:"17/09/2021"}

]

const GestionarVendedor =()=>{
    const [vendedores, setVendedores] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(true);

    useEffect(() => {
        setVendedores(vendedoresBackend);
        console.log(vendedores)
    }, []);
    useEffect(() => {
      //obtener lista de vehículos desde el backend
      //if (mostrarTabla) {
      //  obtenerVehiculos();
      //}
    }, [mostrarTabla]);
    return(
        <section>
            {mostrarTabla ? (
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
                <div className="contenedorTablaVentas">
                  <TablaVendedores listaVendedores={vendedores}/>
                </div>
              </div>
              ) : (
                <AnadirVendedor
                setMostrarTabla={setMostrarTabla}
                listaVendedores={vendedores}
                setVendedores={setVendedores}
                />
            )}

        </section>

    );

}


const TablaVendedores = ({ listaVendedores }) =>{
    useEffect(() => {
        console.log('este es el listado de vendedores en el componente de tabla', listaVendedores);
      }, [listaVendedores]);
    return (
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
                  <tr>
                    <td>{vendedor.identificacion}</td>
                    <td>{vendedor.nombre}</td>
                    <td>{vendedor.especialidad}</td>
                    <td>{vendedor.telefono}</td>
                    <td>{vendedor.fecha_ingreso}</td>
                    <td>Actualizar</td>
                    <td>Eliminar</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
}


const AnadirVendedor =({listaVendedores,setVendedores})=>{
  const [codigo,setCodigo]=useState('');
  return ( 
   
            
          <div className="formularioCrearVentas">
              <div className="contenedorTituloRegistroVenta">
              <h1>Crear Vendedor</h1>                    
              </div>
              <form >
                          
              <label className="labelCampos" htmlFor="nombre">
                  Nombre
              <input onChange={(e)=>{
                  setCodigo(e.target.value);

              }} className="camposRegistroVenta" type="text" />
              </label>

              <label className="labelCampos" htmlFor="especialidad">
              especialidad
              <input className="camposRegistroVenta" type="text" />
              </label>

              <label className="labelCampos"  htmlFor="telefono">
              telefono
              <input className="camposRegistroVenta" type="number" />
              </label>

              <label className="labelCampos"  htmlFor="fechaingreso">
                  Fecha Ingreso
              <input className="camposRegistroVenta" type="date" />
              </label>

              <div className="contBotonGuardarVenta">
              <input className="botonCancelar" type="submit" value="Cancelar" />
              <input type="button" className="botonGuardar"  value="Guardar" />           

              </div>          

          </form>

          </div>
      
    )
}
const Actualizarvendedor =()=>{
  const [codigo,setCodigo]=useState('');
  return ( 
   
            
          <div className="formularioCrearVentas">
              <div className="contenedorTituloRegistroVenta">
              <h1>Actualizar Vendedor</h1>                    
              </div>
              <form >
                          
              <label className="labelCampos" htmlFor="nombre">
                  Nombre
              <input onChange={(e)=>{
                  setCodigo(e.target.value);

              }} className="camposRegistroVenta" type="text" />
              </label>

              <label className="labelCampos" htmlFor="especialidad">
              especialidad
              <input className="camposRegistroVenta" type="text" />
              </label>

              <label className="labelCampos"  htmlFor="telefono">
              telefono
              <input className="camposRegistroVenta" type="number" />
              </label>

              <label className="labelCampos"  htmlFor="fechaingreso">
                  Fecha Ingreso
              <input className="camposRegistroVenta" type="date" />
              </label>

              <div className="contBotonGuardarVenta">
              <input className="botonCancelar" type="submit" value="Cancelar" />
              <input type="button" className="botonGuardar"  value="Guardar" />           

              </div>          

          </form>

          </div>
      
    )
}
export default GestionarVendedor;