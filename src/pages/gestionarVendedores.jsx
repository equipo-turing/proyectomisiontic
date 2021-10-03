//La gestion de ventas será nuestro pagina de inicio o index
import React, {useEffect,useState,useRef} from 'react';

import plus_circle from 'media/plus-circle1.png';


import 'styles/estiloIndex.css';

let vendedoresBackend = [
  {identificacion:"12123",nombre:"andres",especialidad:"Venta de calzado",telefono:"1331",fecha_ingreso:"22-09-2021"},
  {identificacion:"213123",nombre:"walter",especialidad:"Venta de ropa",telefono:"231321",fecha_ingreso:"21-09-2021"},
  {identificacion:"4112",nombre:"fabian",especialidad:"Venta de manillas",telefono:"123123",fecha_ingreso:"20-09-2021"},
  {identificacion:"3412",nombre:"diana",especialidad:"Venta de electrodomesticos",telefono:"12312",fecha_ingreso:"19-09-2021"},
  {identificacion:"56531",nombre:"ruby",especialidad:"Venta de celulares",telefono:"123341",fecha_ingreso:"17-09-2021"}
]

const GestionarVendedor =()=>{
    const [vendedores, setVendedores] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [actualizaVendedor, setActualizaVendedor] = useState(false);

    useEffect(() => {
        setVendedores(vendedoresBackend);
        console.log(vendedores)
    }, []);
    useEffect(() => {
    }, [mostrarTabla]);


    return(
        <section>
            {mostrarTabla ? (
              <div>
                
                <div className="contenedorTablaVentas">
                  <TablaVendedores listaVendedores={vendedores} actualizaVendedor={actualizaVendedor} setActualizaVendedor={setActualizaVendedor} setVendedores={setVendedores} setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla}/>
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


const TablaVendedores = ({ listaVendedores , actualizaVendedor , setActualizaVendedor , setVendedores, setMostrarTabla, mostrarTabla }) =>{
    const [identificacionVendedor, setIdentificacionVendedor] = useState();
    const eliminarVendedor =(identificacion)=>{
      let listaVendedoresTemp = [...listaVendedores];
      for(let i=0;i<listaVendedores.length;i++){
        if(listaVendedores[i].identificacion===identificacion){
          listaVendedoresTemp.splice(i, 1);
          break;
        }
      }
      setVendedores([...listaVendedoresTemp])
    }

    
    const actVendedor =(identificacion)=>{
      console.log("Identificacion => ",identificacion)
      for(let i=0;i<listaVendedores.length;i++){
        console.log('indice = >',i," -> ",listaVendedores[i]);
      }
      setIdentificacionVendedor(identificacion);
      setActualizaVendedor(!actualizaVendedor);
    }
    
    return (
      <section>
        {actualizaVendedor ? (
          <Actualizarvendedor listaVendedores={listaVendedores} actualizaVendedor={actualizaVendedor} setActualizaVendedor={setActualizaVendedor} setVendedores={setVendedores} identificacionVendedor={identificacionVendedor}/>
          ) : (
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
                      <tr >
                        <td>{vendedor.identificacion}</td>
                        <td>{vendedor.nombre}</td>
                        <td>{vendedor.especialidad}</td>
                        <td>{vendedor.telefono}</td>
                        <td>{vendedor.fecha_ingreso}</td>
                        <td><button onClick={() => actVendedor(vendedor.identificacion)}>Actualizar</button></td>
                        <td><button onClick={() => eliminarVendedor(vendedor.identificacion)} > Eliminar</button></td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
          )}
        
      </section>
      );
}


const AnadirVendedor =({setMostrarTabla,listaVendedores,setVendedores})=>{
  const form = useRef(null);
  const [codigo,setCodigo]=useState('');
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVendedor = {};
    fd.forEach((value, key) => {
      nuevoVendedor[key] = value;
    });
    console.log(nuevoVendedor)
    setMostrarTabla(true);
    // Spreed operator
    setVendedores([...listaVendedores,nuevoVendedor])
  };
  return ( 
    <div  className="formularioCrearVentas">
      
        <div className="contenedorTituloRegistroVenta">
        <h1>Crear Vendedor</h1>                    
        </div>
      <form ref={form} onSubmit={submitForm}>
        <label className="labelCampos" htmlFor="identificacion">
          Identificacion
          <input name='identificacion' className="camposRegistroVenta" type="text" />
        </label>      
        <label className="labelCampos" htmlFor="nombre">
            Nombre
          <input name='nombre' className="camposRegistroVenta" type="text" />
        </label>

        <label className="labelCampos" htmlFor="especialidad">
          especialidad
          <input className="camposRegistroVenta" type="text" name='especialidad' />
        </label>

        <label className="labelCampos"  htmlFor="telefono">
          telefono
          <input name='telefono' className="camposRegistroVenta" type="number" />
        </label>

        <label className="labelCampos"  htmlFor="fecha_ingreso">
          Fecha Ingreso
          <input name='fecha_ingreso' className="camposRegistroVenta" type="date" />
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

const Actualizarvendedor =({ listaVendedores , actualizaVendedor , setActualizaVendedor , setVendedores ,identificacionVendedor})=>{
  const form = useRef(null);
  console.log("Desde el actualiza -> ",identificacionVendedor)
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVendedor = {};
    fd.forEach((value, key) => {
      nuevoVendedor[key] = value;
    });
    
    console.log(nuevoVendedor);
    let listaVendedoresTemp = [...listaVendedores];
    for(let i=0;i<listaVendedores.length;i++){
      if(listaVendedores[i].identificacion===identificacionVendedor){
        listaVendedores[i] = nuevoVendedor;
        break;
      }
    }
    setActualizaVendedor(false);
  };
  return ( 
    <div className="formularioCrearVentas">
      <div className="contenedorTituloRegistroVenta">
        <h1>Actualizar Vendedor</h1>                    
      </div>
      <form ref={form} onSubmit={submitForm}>
        <label className="labelCampos" htmlFor="identificacion">
          Identificacion
          <input name='identificacion' className="camposRegistroVenta" type="text" value={identificacionVendedor}/>
        </label>      
        <label className="labelCampos" htmlFor="nombre">
            Nombre
          <input name='nombre' className="camposRegistroVenta" type="text" />
        </label>

        <label className="labelCampos" htmlFor="especialidad">
          especialidad
          <input className="camposRegistroVenta" type="text" name='especialidad' />
        </label>

        <label className="labelCampos"  htmlFor="telefono">
          telefono
          <input name='telefono' className="camposRegistroVenta" type="number" />
        </label>

        <label className="labelCampos"  htmlFor="fecha_ingreso">
          Fecha Ingreso
          <input name='fecha_ingreso' className="camposRegistroVenta" type="date" />
        </label>

        <div className="contBotonGuardarVenta">
          {/*<input className="botonCancelar" type="submit" value="Cancelar" />
          <input type="submit" className="botonGuardar"  value="Guardar" />   */}        
          <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setActualizaVendedor(false)}>Cancelar</button>
          <button className="botonGuardar" type="submit" value="Guardar">Actualizar</button>

        </div>          

      </form>

    </div>
      
    )
}


export default GestionarVendedor;