import Layout from 'layouts/Layout';
import Index from 'pages';
import GestionarVendedor from 'pages/gestionarVendedores';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';


function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route path='/' exact>
              <Index />
            </Route> 
            <Route path='/gestionar_vendedor' exact>
              <GestionarVendedor />
            </Route>          
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;
