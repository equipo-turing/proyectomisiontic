import React, {useEffect,useState,useRef} from 'react';
import 'styles/estiloIndex.css';
import plus_circle from 'media/plus-circle1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import TablaProductos from 'components/TablaProductos'

//base de datos de productos
const bdproducto=()=>[
    {
        identificacion:"12345",
        descripcion:"zapatos",
        valorUnitario:"50000",
        estado:"desponible",
       
    },

    {
        identificacion:"12345",
        descripcion:"chanclas",
        valorUnitario:"45000",
        estado:"no disponible",
       
    },
    {
        identificacion:"12345",
        descripcion:"chanclas",
        valorUnitario:"45000",
        estado:"no disponible",
       
    }
   
    
    
];

//Tabla para mostrar los productos
const TablaProductos = ({setMostrarTabla,mostrarTabla,listaProducto}) => {
    return (
        <div>
                <div>
                  <div className="contenedorImagenTitulo">                
                    <div className="iconoVentas">
                      <button onClick={()=>{setMostrarTabla(!mostrarTabla)}}>
                          <img src={plus_circle} alt="" />
                     </button>
                    </div>
                  
                    <div className="tituloGestionarProducto">
                      <h1>GESTIONAR PRODUCTO</h1>
                    </div>
                  </div>
                </div>
            <div className='contenedorTablaVentas'>
              <table>
                <thead className="encabezadoTablaVentas">
                  <tr>
                    <th>Identificacion</th>
                    <th>Descripción</th>
                    <th>Valor Unitario</th>
                    <th>Estado</th>                    
                  </tr>
                </thead>
                <tbody>
                    {listaProducto.map((bdproducto)=>{
                        return(
                            <tr>
                                <td>{bdproducto.identificacion}</td>
                                <td>{bdproducto.descripcion}</td>
                                <td>{bdproducto.valorUnitario}</td>
                                <td>{bdproducto.estado}</td>
                            </tr> 
                            

                        )

                    })}
                    <tr></tr>                  
                      
                 
              </tbody>
            </table>
          </div>
        </div>
    )
}
//formulario donde se crean los productos
const FormularioCrearProducto=({setMostrarTabla,mostrarTabla,setProducto,listaProducto})=>{
    const [identificacion,setIdentificacion]=useState('')
    const [descripcion,setDescripcion]=useState('')
    const [valorUnitario,setValorUnitario]=useState('')
    const [estado,setEstado]=useState('')

    const guardarProducto=()=>{    
        setProducto([...listaProducto,{identificacion:identificacion,descripcion:descripcion,valorUnitario:valorUnitario,estado:estado}])    
        toast.success("Producto Guardado !!");

    }

   
    return(
    
        <div  className="formularioCrearVentas">
            
            <div className="contenedorTituloRegistroVenta">
            <h1>Crear Producto</h1>                    
            </div>

            <form >
            <label className="labelCampos" htmlFor="codigo">
                Identificacion
                <input value={identificacion} onChange={(e)=>{setIdentificacion(e.target.value)}} name='identificacion' className="camposRegistroVenta" type="text" />
            </label> 

            <label className="labelCampos" htmlFor="descripcion">
                Descripción
                <input value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}} name='descripcion' className="camposRegistroVenta" type="text" />
            </label>

            <label className="labelCampos" htmlFor="valor unitario">
                Valor Unitario
                <input value={valorUnitario} onChange={(e)=>{setValorUnitario(e.target.value)}} className="camposRegistroVenta" type="text" name='valorUnitario' />
            </label>

            <label className="labelCampos"  htmlFor="estado">
                Estado
                <input value={estado} onChange={(e)=>{setEstado(e.target.value)}} name='estado' className="camposRegistroVenta" type="text" />
            </label>                
            

            <div className="contBotonGuardarVenta">
                
                <button  className="botonCancelar" type="button" value="Cancelar" >Cancelar</button>
                <button onClick={()=>{guardarProducto();setMostrarTabla(!mostrarTabla)}} className="botonGuardar" type="button" value="Guardar">Crear</button>

            </div>          

            </form>

       </div>
)

}


const Gestionar_producto = () => {
    const [mostrarTabla,setMostrarTabla]=useState(true)
    const [producto,setProducto]=useState([])//es un arreglo que almacenará los productos que vengan de la bd

    useEffect(()=>{
        setProducto(bdproducto);
    },[])

   
    return (
        <div>         

            {mostrarTabla ?  <TablaProductos setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} listaProducto={producto} /> 
            :<FormularioCrearProducto setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} setProducto={setProducto } listaProducto={producto}/>}
            <ToastContainer  position="top-center"  autoClose={3000} />            

        </div>
              
    );
}

export default Gestionar_producto;
