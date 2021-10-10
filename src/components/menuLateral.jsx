import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/estiloMenuLateral.css'
import logoVenta from 'media/logoVenta.png';
import iconoVenta from 'media/iconoVenta.png';
import iconoVendedor from 'media/iconoVendedor.png';
import iconoAdmin from 'media/iconoAdmin.png';
import iconoSesion from 'media/iconoSesion.png';
import iconoProducto from 'media/producto.png';

const Menu = () => {
    return (
       <nav className="menuLateral"> 
        <ul>
            <li> 
                <nav className="navMenuLateral">
                <img src={logoVenta} alt="Logo aplicación" />
                <h1>Ventas Turing</h1>  
                </nav>  
            </li>

            <li>
            <Link to='/ventas' className="itemMenuLateral"> 
                <img src={iconoVenta} alt="Ícono Venta" />
                <h4>Ventas</h4>
            </Link>                 
            </li>

            <li>    
                <Link to='/gestionar_vendedor' className="itemMenuLateral">          
                <img src={iconoVendedor} alt="Ícono Vendedor" />
                <h4>Vendedores</h4>      
                </Link> 
            </li>
            <li>    
                <Link to='/gestionar_producto' className="itemMenuLateral">          
                <img src={iconoProducto} alt="Ícono Producto" />
                <h4>Productos</h4>      
                </Link> 
            </li>

            <li>
            <Link to='/AdministrarUsuarios' className="itemMenuLateral"> 
                <img src={iconoAdmin} alt="Ícono administración de usuarios" />
                <h4>Administración de Usuarios</h4>
            </Link>

            </li>

            <li>
            <Link to='/' className="itemMenuLateral"> 
                <img src={iconoSesion} alt="Ícono cerrar sesión" />
                <h4>Cerrar Sesión</h4>
            </Link>

            </li>
            
        </ul>                    
 

       </nav>   
    );
}

export default Menu;