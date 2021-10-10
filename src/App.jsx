import Layout from 'layouts/Layout';
import Index from 'pages';
import GestionarUsuario from 'pages/gestionarUsuarios';
import GestionarVendedor from 'pages/gestionarVendedores';
import AnadirVendedor from 'pages/anadirVendedor';
import Actualizarvendedor from 'pages/actualizarvendedor';
import FormularioCrearVentas from 'pages/formularioCrearVenta';
import ActualizarVenta from 'pages/actualizarVenta';

import AdministrarUsuarios from 'pages/AdministrarUsuarios';
import Ventas from 'pages/ventas';
import Productos from 'pages/gestionar_producto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
     

        
        
          <Switch>

          <Route path='/' exact>
              <Index />
            </Route> 
            <Layout>

            
            <Route path='/ventas' exact>
              <Ventas />
            </Route>            
             
            <Route path='/actualizarVenta' exact>
              <ActualizarVenta />
              
            </Route> 
            <Route path='/formularioCrearUsuario' exact>
              <formularioCrearUsuario/>
            </Route> 
            <Route path='/gestionarUsuarios' exact>
              <GestionarUsuario />
            </Route> 
            <Route path='/formularioCrearVenta' exact>
              <FormularioCrearVentas />
            </Route> 
            <Route path='/gestionar_vendedor' exact>
              <GestionarVendedor />
            </Route>
            <Route path='/anadirVendedor' exact>
              <AnadirVendedor />
            </Route>

           
            <Route path='/actualizarvendedor' exact>
              <Actualizarvendedor />
            </Route> 
            <Route path='/gestionar_producto' exact>
              <Productos />
            </Route> 
            <Route path='/AdministrarUsuarios' exact>
              <AdministrarUsuarios />
            </Route> 
            </Layout>
          </Switch>
        
      </Router>
  );
}

export default App;