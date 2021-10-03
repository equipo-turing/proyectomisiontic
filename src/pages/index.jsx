//La gestion de ventas será nuestro pagina de inicio o index
import React, {useEffect,useState} from 'react'
import TablaVenta from 'components/tablaVentas';
import FormularioCrearVenta from 'pages/formularioCrearVenta';
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
    },
    {
        codigo:"15555",
        valorVenta:"600000",
        fechaVenta:"21/09/2021",
        fechaPago:"05/10/2021",
        responsable:"Walter Medina",
        descripcion:"Venta Tenis"
    },
    
    
];

//funcion donde está el formulario ventas, recibe como parámeto una lista de ventas

//funcion principal la cual se importa para ser enrutada en el archivo app.jsx
const Index =()=>{  
    const [ventas,setVentas]=useState([]);//el [] indica que el arreglo será vacío inicialmente
    useEffect(()=>{
        //se trae la lista de ventas desde el backend, en este caso desde el objeto venta y lo coloca en setVentas
        setVentas(venta);
       },[])  //si [] se deja vacio se ejecuta una sola vez, para este contexto necesitamos que la tabla se muestre una sola vez cuando la pagina se renderiza

    return(  
        <div>
        <TablaVenta listaVenta={ventas}   /> 
        
        

        </div>
        //llamo a la funcion TablaVentas  y le paso a la lista la variable ventas, variable que tiene todos las ventas de la bd
        
        );
}

export default Index;