import React, {useEffect,useState,useRef} from 'react';
import 'styles/estiloIndex.css';
import plus_circle from 'media/plus-circle1.png';
import penciles from 'media/pencil1.png';
import iconoDelete from 'media/delete.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

import { obtenerProductos ,ActualizarProducto ,eliminarElProducto,crearElProducto} from 'utils/api';

//import TablaProductos from 'components/TablaProductos'

//Tabla para mostrar los productos
const TablaProductos = ({setMostrarTabla,mostrarTabla,listaProducto,actualizarForm,setActualizarForm,}) => {

  const [codigo,setCodigo]=useState();
  const [busqueda, setBusqueda] = useState('');
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaProducto);

  useEffect(() => {
    setVehiculosFiltrados(
      listaProducto.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProducto]);

 const actualizarProducto=(bdproducto)=>{
   setActualizarForm(!actualizarForm)
   setCodigo(bdproducto)  
 }

  const eliminarProducto=(productoid)=>{
    /*
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/productoeliminar',
      headers: {'Content-Type': 'application/json'},
      data: {id: productoid._id}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      toast.success("Producto Eliminado !!");
    }).catch(function (error) {
      console.error(error);
      toast.error("No se pudo eliminar")
    });
    */
   eliminarElProducto(productoid,
    (response)=>{
      console.log(response.data);
      toast.success("Producto Eliminado !!");
    },
    (error)=>{
      console.error(error);
      toast.error("No se pudo eliminar")
    })
  }
  
    return (
      <>
      {actualizarForm ? (<FormularioActualizarProducto setActualizarForm={setActualizarForm} actualizarForm={actualizarForm} listaProducto={listaProducto}  setMostrarTabla={mostrarTabla} codigo={codigo}/>):
        (
          <div>
                <div>
                  <input value={busqueda} onChange={(e)=>{setBusqueda(e.target.value)}} className="buscar" type="text" placeholder='Buscar Producto' />

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
                    <th>Actualizar</th> 
                    <th>Eliminar</th>                  
                  </tr>
                </thead>
                <tbody>
                    {vehiculosFiltrados.map((bdproducto)=>{
                        return(
                          <tr key={nanoid()} > 
                            <td>{bdproducto.identificacion}</td>
                            <td>{bdproducto.descripcion}</td>
                            <td>{bdproducto.valorUnitario}</td>
                            <td>{bdproducto.estado}</td> 
                            <td>  <button onClick={()=>{actualizarProducto(bdproducto)}}> <img src={penciles} alt="" /> </button></td>
                            <td>  <button onClick={()=>{eliminarProducto(bdproducto)}}> <img src={iconoDelete} alt="" /> </button></td>
                            
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

      </>
      

        
    )
}
//formulario donde se crean los productos
const FormularioCrearProducto=({setMostrarTabla,mostrarTabla,setProducto,listaProducto})=>{
    const form=useRef(null)//es como tener todo el html del formulario en una variable y de esta manera accedo a todo lo que tenga el form
    

    /*METODO PARA GUARDAR UN PRODUCTO EN BD*/
    const guardarProducto= async(e)=>{  
        e.preventDefault()
        const infoFormulario=new FormData(form.current);//me traigo todos los campos del formulario y los tengo en una variable
        const nuevoProducto={};

        infoFormulario.forEach((value,key)=>{//recorro todos los campos del formulario y los almaceno en un objeto nuevoProducto
            nuevoProducto[key]=value;

        });      
        
        //setProducto([...listaProducto,nuevoProducto])  esto se usaba cuando la bd estaba en el mismo codigo

       /*********ME PERMITE ENVIAR INFORMACION A LA BD */
       crearElProducto(nuevoProducto,
        (response)=>{
          console.log(response.data);
          toast.success("Producto Guardado !!");
        },
        (error)=>{
          console.error(error);
          toast.error("Error creando producto !!")
        })
       /*
      const options = {
        method: 'POST',
        url: 'http://localhost:5000/productonuevo',
        headers: {'Content-Type': 'application/json'},
        data: {
          identificacion:nuevoProducto.identificacion,
          descripcion: nuevoProducto.descripcion,
          valorUnitario: nuevoProducto.valorUnitario,
          estado: nuevoProducto.estado
        }
      };

     await axios.request(options).then(function (response) {
        console.log(response.data);
        toast.success("Producto Guardado !!");
      }).catch(function (error) {
        console.error(error);
        toast.error("Error creando producto !!")
      });
      */ 
      /******************************************************** */
      setMostrarTabla(!mostrarTabla)

    }

   
    return(
    
        <div  className="formularioCrearVentas">
            
            <div className="contenedorTituloRegistroVenta">
            <h1>Crear Producto</h1>                    
            </div>

            <form ref={form} onSubmit={guardarProducto}>
            <label className="labelCampos">
                Identificacion
                <input  name='identificacion' className="camposRegistroVenta" type="text" required/>
            </label> 

            <label className="labelCampos" htmlFor="descripcion">
                Descripción
                <input   name='descripcion' className="camposRegistroVenta" type="text" required />
            </label>

            <label className="labelCampos" htmlFor="valor unitario">
                Valor Unitario
                <input   className="camposRegistroVenta" type="number" name='valorUnitario' required />
            </label>

            <label className="labelCampos"  htmlFor="estado">
                Estado
                <select  className="camposRegistroVenta" name="estado"  required>
                    <option value="" selected disabled>Seleccione una opción</option>
                    <option >Disponible</option>
                    <option >No disponible</option>
                </select>
                
            </label>                
            

            <div className="contBotonGuardarVenta">
                
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className="botonCancelar" type="submit" value="Cancelar" >Cancelar</button>
                <button type='submit'  className="botonGuardar" value="Guardar">Crear</button>

            </div>          

            </form>

        </div>
         )

}

const FormularioActualizarProducto=({setActualizarForm,actualizarForm,listaProducto,codigo})=>{
  const form=useRef(null)
  const actualizarProducto=async(e)=>{
    console.log("resultado",codigo._id);
    e.preventDefault();
    const datosFormulario=new FormData(form.current);
    const editarProducto={};

    datosFormulario.forEach((value,key)=>{//recorro todos los campos del formulario y los almaceno en un objeto nuevoProducto
      editarProducto[key]=value;

        });
        
        ActualizarProducto(codigo,editarProducto,
        (response)=>{
          console.log(response.data);
          toast.success("Producto actualizado!!");
        },(error)=>{
          console.error(error);
          toast.error("El producto no se actualizó")
        })
        
    setActualizarForm(!actualizarForm)


  } 


  return(
    <div  className="formularioCrearVentas">
            
    <div className="contenedorTituloRegistroVenta">
    <h1>Editar Producto</h1>                    
    </div>

    <form ref={form} onSubmit={actualizarProducto}  >
    <label className="labelCampos">
        Identificacion
        <input  name='identificacion' className="camposRegistroVenta" type="text"  value={codigo.identificacion}/>
    </label> 

    <label className="labelCampos" htmlFor="descripcion">
        Descripción
        <input   name='descripcion' className="camposRegistroVenta" type="text"  defaultValue={codigo.descripcion} />
    </label>

    <label className="labelCampos" htmlFor="valor unitario">
        Valor Unitario
        <input   className="camposRegistroVenta" type="number" name='valorUnitario' defaultValue={codigo.valorUnitario} />
    </label>

    <label className="labelCampos"  htmlFor="estado">
        Estado
        <select  className="camposRegistroVenta" name="estado"  required defaultValue={codigo.estado}>
            <option value="" selected disabled>Seleccione una opción</option>
            <option >Disponible</option>
            <option >No disponible</option>
        </select>
        
    </label>                
    

    <div className="contBotonGuardarVenta">
        
        <button onClick={()=>{setActualizarForm(!actualizarForm)}} className="botonCancelar" type="submit" value="Cancelar" >Cancelar</button>
        <button  type='submit'  className="botonGuardar" value="Editar">Editar</button>

    </div>          

    </form>

</div>
  )

}
//funcion principal que se ejecutará, como una main en java
const Gestionar_producto = () => {
    const [mostrarTabla,setMostrarTabla]=useState(true)
    const [actualizarForm,setActualizarForm]=useState(false)
   
    const [producto,setProducto]=useState([])//es un arreglo que almacenará los productos que vengan de la bd

    useEffect(()=>{
      if(mostrarTabla){

        //para obtener los productos desde la base de datos y colocarla en la tabla, por medio de setProducto, response.data me trae los datos de la bd
        
        obtenerProductos(
          (response)=>{
            console.log(response.data);
            setProducto(response.data)
          }
          ,(error)=>{
            console.log(error)
          }
        );

      }
            

        
    },[mostrarTabla])

   
    return (
        <div>   
           

            {mostrarTabla ? (
             <TablaProductos setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} listaProducto={producto} actualizarForm={actualizarForm} setActualizarForm={setActualizarForm} producto={producto} /> 
            )
            :(<FormularioCrearProducto setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} setProducto={setProducto } listaProducto={producto}/>
            )
            }           
            <ToastContainer  position="top-center"  autoClose={3000} />            

        </div>
              
    );
}

export default Gestionar_producto;
