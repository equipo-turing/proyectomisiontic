import React, {useEffect,useState,useRef} from 'react';
import 'styles/estiloIndex.css';
import plus_circle from 'media/plus-circle1.png';

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
   
    
    
];

//Tabla para mostrar los productos
const TablaProductos = () => {
    return (
        <div>
                <div>
                  <div className="contenedorImagenTitulo">                
                    <div className="iconoVentas">
                      <button>
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
                      
                 
              </tbody>
            </table>
          </div>
        </div>
    )
}


const Gestionar_producto = () => {

    const [identificacion,setIdentificacion]=useState('')
    const [valorUnitario,setValorUnitario]=useState()
   

    useEffect(()=>{
        console.log("identificacion ",identificacion)        
       
       },[identificacion]); 

    const enviarDatos=()=>{
        console.log("codigo: ",identificacion)
    }

    return (
       
        <div  className="formularioCrearVentas">
        
                <div className="contenedorTituloRegistroVenta">
                <h1>Crear Producto</h1>                    
                </div>

                <form >
                <label className="labelCampos" htmlFor="codigo">
                    Identificacion
                    <input onChange={(e)=>{setIdentificacion(e.target.value)}} name='identificacion' className="camposRegistroVenta" type="text" />
                </label> 

                <label className="labelCampos" htmlFor="descripcion">
                    Descripción
                    <input name='descripcion' className="camposRegistroVenta" type="text" />
                </label>
        
                <label className="labelCampos" htmlFor="valor unitario">
                    Valor Unitario
                    <input onChange={(e)=>{setValorUnitario(e.target.value)}} className="camposRegistroVenta" type="text" name='valorUnitario' />
                </label>
        
                <label className="labelCampos"  htmlFor="estado">
                    Estado
                    <input name='estado' className="camposRegistroVenta" type="text" />
                </label>                
                
        
                <div className="contBotonGuardarVenta">
                    
                    <button className="botonCancelar" type="button" value="Cancelar" >Cancelar</button>
                    <button onClick={enviarDatos} className="botonGuardar" type="button" value="Guardar">Crear</button>
        
                </div>          
        
            </form>
  
      </div>
    );
}

export default Gestionar_producto;
