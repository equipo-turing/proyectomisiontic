import React, {useEffect,useState} from 'react';
import "styles/estiloFormularioVenta.css";



const FormularioCrearVenta = () => {
    const [codigo,setCodigo]=useState('');
    useEffect(()=>{
        console.log("este es el codio: ",codigo);

    },[]);

    const metodo=()=>{
        console.log("este es el codio: ",codigo);
    }
    return ( 
     
              
            <div className="formularioCrearVentas">
                <div className="contenedorTituloRegistroVenta">
                <h1>Registrar Venta</h1>                    
                </div>

                <form >
                                
                
                <label className="labelCampos" htmlFor="codigo">
                    Código
                <input onChange={(e)=>{
                    setCodigo(e.target.value);

                }} className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos" htmlFor="valorVenta">
                    Valor Venta
                <input className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Fecha Venta
                <input className="camposRegistroVenta" type="date" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Fecha Pago
                <input className="camposRegistroVenta" type="date" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Responsable
                <input className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Descripción
                <input className="camposRegistroVenta" type="text" />
                </label>

                <div className="contBotonGuardarVenta">
                <input className="botonCancelar" type="submit" value="Cancelar" />
                <input type="button" onClick={metodo} className="botonGuardar"  value="Guardar" />           

                </div>          

            </form>

            </div>
            
      
    )
}

export default FormularioCrearVenta
