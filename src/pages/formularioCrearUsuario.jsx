import "styles/estiloFormularioUsuario.css";

const FormularioCrearUsuario = () => {
    
    return ( 
         
            <div className="formularioCrearUsuarios">
                <div className="contenedorTituloRegistroUsuario">
                <h1>REGISTRAR USUARIOS</h1>                    
                </div>

                <form >
                        
                <label className="labelCampos" htmlFor="identificacion ">
                    Identificación

                <input className="camposRegistroUsuario" type="text" /> 
            
                </label>
            
                <label className="labelCampos" htmlFor="nombre">
                    Nombre
                <input className="camposRegistroUsuario" type="text" />
                </label>

                <label className="labelCampos"  htmlFor="rol">
                    Rol
                <input className="camposRegistroUsuario" type="text" />
                </label>

                <div className="contBotonGuardarUsuario">
                <input className="botonCancelar" type="submit" value="Cancelar" />
              
               
                     

                </div>          

            </form>

            </div>
            
      
    )
}
export default FormularioCrearUsuario

