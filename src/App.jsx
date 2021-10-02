import Layout from 'layouts/Layout';
import Index from 'pages';
import GestionarUsuario from 'pages/gestionarUsuarios';
import GestionarVendedor from 'pages/gestionarVendedores';
import AnadirVendedor from 'pages/anadirVendedor';
import Actualizarvendedor from 'pages/actualizarvendedor';
import FormularioCrearVentas from 'pages/formularioCrearVenta';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route path='/' exact>
              <Index />
            </Route>            
            <Route path='/formularioCrearVenta' exact>
              <FormularioCrearVentas />
              
            </Route> 
            <Route path='/formularioCrearUsuario' exact>
              <formularioCrearUsuario/>
            </Route> 
            <Route path='/gestionarUsuarios' exact>
              <GestionarUsuario />
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
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;