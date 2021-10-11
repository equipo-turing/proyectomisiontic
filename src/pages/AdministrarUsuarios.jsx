import React, {useEffect,useState,useRef} from 'react';

import plus_circle from 'media/plus-circle1.png';

import TablaVendedores from 'components/TablaVendedores'
import TablaUsuarios from 'components/TablaUsuarios'
import AnadirUsuario from 'components/AnadirUsuario';
import 'styles/estiloIndex.css';
import {obtenerUsuarios} from 'utils/api'

let usuariosBackend = [
    {identificacion:"12123",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"9999",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"8888",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"55555",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"66666",nombre:"andres",rol:"Venta de calzado"},
]

const AdministrarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [actualizaUsuario, setActualizaUsuario] = useState(false);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerUsuarios(setUsuarios, setEjecutarConsulta);
        }
    }, [ejecutarConsulta]);
    
    useEffect(() => {
        //obtener lista de vehículos desde el backend
        if (mostrarTabla) {
          setEjecutarConsulta(true);
        }
      }, [mostrarTabla]);
    return(
        <section>
            {mostrarTabla ? (
              <div>
                
                <div className="contenedorTablaVentas">
                  <TablaUsuarios listaUsuarios={usuarios} actualizaUsuario={actualizaUsuario} setActualizaUsuario={setActualizaUsuario} setUsuarios={setUsuarios} setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla}/>
                </div>
              </div>
              ) : (
                <AnadirUsuario
                    setMostrarTabla={setMostrarTabla}
                    listaUsuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
            )}

        </section>

    );
}

export default AdministrarUsuarios;
