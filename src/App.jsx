import Layout from 'layouts/Layout';
import Index from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';


function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route path='/'>
              <Index />
            </Route>           
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;
