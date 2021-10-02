//import agregar from "media/plus-circle1.png";
//import { Link } from "react-router-dom";
import React, {useEffect,useState} from 'react'
//import { Link } from 'react-router-dom';
import 'styles/stylesGestionarUsuario.css';
import penciles from 'media/pencil1.png';





const usuario=()=>[
{
 identificacion:"1151765432",
 nombre:"Ruby Medina",
 rol:"vendedor"
 

},
{
 identificacion:"1144765432",
 nombre:"Isaias Medina",
 rol:"Administrador"


}

];
 const TablaGestionarUsuarios=({listaUsuarios})=> {
   return (
     <section>
       <div className="contenedorImagenTitulo">
         <link to = '/formularioCrearUsuario'>
           
          

           
            </link>

       <h1 className="tituloGestionarUsuario">GESTIONAR USUARIOS</h1>

       </div>
      
       
      
       <div className="contenedorTablaUsuarios">
         <table>
           <thead className="encabezadoTablaUsuarios"> 
            <tr>
              <th>Identificación </th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Actualizar</th>

            </tr>

           </thead>
           <tbody>
             {listaUsuarios.map((usuario)=>{
               return(
                 <tr>
                   <td>{usuario.identificacion}</td>
                   <td>{usuario.nombre}</td>
                   <td>{usuario.rol}</td>
                   <td>  <img  src={penciles } alt="Crear Venta" /></td>
                  
                  
                    </tr>
               )

               })}

           </tbody>

       </table>
       </div>

     </section>

   )

 }



 const IndexUsuario =()=>{  
  const [ventas,setVentas]=useState([]);
  useEffect(()=>{
      //se trae la lista de ventas desde el backend, en este caso desde el objeto venta y lo coloca en setVentas
      setVentas(usuario);
     },[])  

  return(  
      //llamo a la funcion TablaVentas  y le paso a la lista la variable ventas, variable que tiene todos las ventas de la bd
      <TablaGestionarUsuarios listaUsuarios={ventas}/>       

      

  );

}

export default IndexUsuario;