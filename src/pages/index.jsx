//La gestion de ventas será nuestro pagina de inicio o index
import React, {useEffect,useState,useRef} from 'react'

import plus_circle from 'media/plus-circle1.png';

import 'styles/estiloFormularioVenta.css';

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
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [actualizaVenta, setActualizaVenta] = useState(false);

    useEffect(()=>{
        //se trae la lista de ventas desde el backend, en este caso desde el objeto venta y lo coloca en setVentas
        setVentas(venta);
       },[]);  //si [] se deja vacio se ejecuta una sola vez, para este contexto necesitamos que la tabla se muestre una sola vez cuando la pagina se renderiza
    
    useEffect(()=>{

    },[mostrarTabla]);

    return(  
        <div>
        
        {mostrarTabla ? (
              
                  <TablaVentas listaVenta={ventas} actualizarVenta={actualizaVenta} setActualizaVenta={setActualizaVenta} setVentas={setVentas} setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla}/>
              
              ) : 
              (
                <AnadirVenta
                setMostrarTabla={setMostrarTabla}
                listaVenta={ventas}
                setVentas={setVentas}
                />
             )
            
        }       
        

        </div>
        //llamo a la funcion TablaVentas  y le paso a la lista la variable ventas, variable que tiene todos las ventas de la bd
        
        );
}


const TablaVentas=({ listaVenta , actualizaVenta , setActualizaVenta , setVentas, setMostrarTabla, mostrarTabla })=>{


    const [codigoVenta, setCodigoVenta] = useState();
    const eliminarVenta =(codigo)=>{
      let listaVentaTemp = [...listaVenta];
      for(let i=0;i<listaVenta.length;i++){
        if(listaVenta[i].codigo===codigo){
            listaVentaTemp.splice(i, 1);
          break;
        }
      }
      setVentas([...listaVentaTemp])
    }

    
    const actVenta =(codigo)=>{
      console.log("Identificacion => ",codigo)
      for(let i=0;i<listaVenta.length;i++){
        console.log('indice = >',i," -> ",listaVenta[i]);
      }
      setCodigoVenta(codigo);
      setActualizaVenta(!actualizaVenta);
    }
    return (
        <section>
            {actualizaVenta? 
            (<ActualizarVenta listaVenta={listaVenta} actualizaVenta={actualizaVenta} setActualizaVenta={setActualizaVenta} setVentas={setVentas} identificacionVenta={codigoVenta}/>
                ):
            (

                <div>

               
             
                <div className="contenedorImagenTitulo">
                
                
                <div className="iconoVentas">
                      <button 
                        onClick={() => {
                          setMostrarTabla(!mostrarTabla);
                        }}
                      ><img src={plus_circle} alt="" /></button>
                    </div>     
                
                           
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
                        <th>Actualizar</th>
                        <th>Eliminar</th>
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
                                <td><button onClick={() => actVenta(venta.codigo)}>Actualizar</button></td>
                                <td><button onClick={() => eliminarVenta(venta.codigo)} > Eliminar</button></td>                     
                            </tr>
                        )                      

                    })}                   

                </tbody>                
            </table>
      


            </div>
            </div>
            

            )
            
        
        }
            
           
        </section>
    )

}



const AnadirVenta =({setMostrarTabla,listaVenta,setVentas})=>{
    const form = useRef(null);
    const [codigo,setCodigo]=useState('');
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevaVenta = {};
      fd.forEach((value, key) => {
        nuevaVenta[key] = value;
      });
      console.log(nuevaVenta)
      setMostrarTabla(true);
      // Spreed operator
      setVentas([...listaVenta,nuevaVenta])
    };
    return ( 
      <div  className="formularioCrearVentas">
        
          <div className="contenedorTituloRegistroVenta">
          <h1>Crear Venta</h1>                    
          </div>
        <form ref={form} onSubmit={submitForm}>
          <label className="labelCampos" htmlFor="identificacion">
            Codigo
            <input name='codigo' className="camposRegistroVenta" type="text" />
          </label>      
          <label className="labelCampos" htmlFor="nombre">
              Valor Venta
            <input name='valorVenta' className="camposRegistroVenta" type="text" />
          </label>
  
          <label className="labelCampos" htmlFor="especialidad">
            Fecha Venta
            <input className="camposRegistroVenta" type="date" name='fechaVenta' />
          </label>
  
          <label className="labelCampos"  htmlFor="telefono">
            Fecha Pago
            <input name='fechaPago' className="camposRegistroVenta" type="date" />
          </label>
  
          <label className="labelCampos"  htmlFor="fecha_ingreso">
            Responsable
            <input name='responsable' className="camposRegistroVenta" type="date" />
          </label>

          <label className="labelCampos"  htmlFor="fecha_ingreso">
            Descripcion
            <input name='descripcion' className="camposRegistroVenta" type="text" />
          </label>
  
          <div className="contBotonGuardarVenta">
            {/*<input className="botonCancelar" type="submit" value="Cancelar" />
            <input type="submit" className="botonGuardar"  value="Guardar" />*/}
            <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setMostrarTabla(true)}>Cancelar</button>
            <button className="botonGuardar" type="submit" value="Guardar">Crear</button>
  
          </div>          
  
      </form>
  
      </div>
        
      )
  }
  
  const ActualizarVenta =({ listaVenta , actualizaVenta , setActualizaVenta , setVentas ,identificacionVenta})=>{
    const form = useRef(null);
    console.log("Desde el actualiza -> ",identificacionVenta)
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevaVenta = {};
      fd.forEach((value, key) => {
        nuevaVenta[key] = value;
      });
      
      console.log(nuevaVenta);
      let listaVentaTemp = [...listaVenta];
      for(let i=0;i<listaVenta.length;i++){
        if(listaVenta[i].codigo===identificacionVenta){
          listaVenta[i] = nuevaVenta;
          break;
        }
      }
      setActualizaVenta(false);
    };
    return ( 
      <div className="formularioCrearVentas">
        <div className="contenedorTituloRegistroVenta">
          <h1>Actualizar Venta</h1>                    
        </div>
        <form ref={form} onSubmit={submitForm}>
          <label className="labelCampos" htmlFor="identificacion">
            Código
            <input name='codigo' className="camposRegistroVenta" type="text" value={identificacionVenta}/>
          </label>      
          <label className="labelCampos" htmlFor="nombre">
              Valor Venta
            <input name='valorVenta' className="camposRegistroVenta" type="text" />
          </label>
  
          <label className="labelCampos" htmlFor="especialidad">
            Fecha Venta
            <input className="camposRegistroVenta" type="date" name='fechaVenta' />
          </label>
  
          <label className="labelCampos"  htmlFor="telefono">
            Fecha Pago
            <input name='fechaPago' className="camposRegistroVenta" type="date" />
          </label>
  
          <label className="labelCampos"  htmlFor="fecha_ingreso">
            Responsable
            <input name='responsable' className="camposRegistroVenta" type="text" />
          </label>

          <label className="labelCampos"  htmlFor="fecha_ingreso">
            Descripcion
            <input name='descripcion' className="camposRegistroVenta" type="text" />
          </label>
  
          <div className="contBotonGuardarVenta">
            {/*<input className="botonCancelar" type="submit" value="Cancelar" />
            <input type="submit" className="botonGuardar"  value="Guardar" />   */}        
            <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setActualizaVenta(false)}>Cancelar</button>
            <button className="botonGuardar" type="submit" value="Guardar">Actualizar</button>
  
          </div>          
  
        </form>
  
      </div>
        
      )
  }



export default Index;