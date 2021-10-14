import Layout from 'layouts/Layout';
import Index from 'pages';
import GestionarUsuario from 'pages/gestionarUsuarios';
import GestionarVendedor from 'pages/gestionarVendedores';
import AnadirVendedor from 'pages/anadirVendedor';
import FormularioCrearVentas from 'pages/formularioCrearVenta';
import ActualizarVenta from 'pages/actualizarVenta';

import AdministrarUsuarios from 'pages/AdministrarUsuarios';
import Ventas from 'pages/ventas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
    domain='turing-misiontic.us.auth0.com'
    clientId='Qm4xSXJVM3aMW3xtufmLsJauTGHwxevb'
    redirectUri={window.location.origin}
    >
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

            
            <Route path='/AdministrarUsuarios' exact>
              <AdministrarUsuarios />
            </Route> 

          </Layout>
        </Switch>
          
      </Router>
    </Auth0Provider>
  );
}

export default App;