import React, {useEffect,useState,useRef} from 'react';

import plus_circle from 'media/plus-circle1.png';

import TablaVendedores from 'components/TablaVendedores'
import TablaUsuarios from 'components/TablaUsuarios'
import AnadirUsuario from 'components/AnadirUsuario';
import 'styles/estiloIndex.css';
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

    useEffect(() => {
        setUsuarios(usuariosBackend);
        console.log(actualizaUsuario)
    }, []);
    useEffect(() => {
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
