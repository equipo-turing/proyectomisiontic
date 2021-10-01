//La gestion de ventas será nuestro pagina de inicio o index
import { Link } from 'react-router-dom';
import React, {useEffect,useState} from 'react'
import plus_circle from 'media/plus-circle1.png';
import 'styles/estiloIndex.css';

//objeto venta con ventas ya creadas manualmente;
const venta=()=>[
    {
        codigo:"12345",
        valorVenta:"5.700.600",
        fechaVenta:"22/09/2021",
        fechaPago:"22/10/2021",
        responsable:"Andres Rojas",
        descripcion:"Venta Zapatos"
    },

    {
        codigo:"15555",
        valorVenta:"600000",
        fechaVenta:"21/09/2021",
        fechaPago:"05/10/2021",
        responsable:"Walter Medina",
        descripcion:"Venta Tenis"
    }
    
];

//funcion donde está el formulario ventas, recibe como parámeto una lista de ventas
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
                        </tr>

                        )
                       

                    })}                   

                </tbody>                
            </table>

            </div>
           
        </section>
    )

}


const Index =()=>{  
    const [ventas,setVentas]=useState([]);
    useEffect(()=>{
        //se trae la lista de ventas desde el backend, en este caso desde el objeto venta y lo coloca en setVentas
        setVentas(venta);
       },[])  

    return(  
        //llamo a la funcion TablaVentas  y le paso a la lista la variable ventas, variable que tiene todos las ventas de la bd
        <TablaVentas listaVenta={ventas}/>       

        

    );

}

export default Index;