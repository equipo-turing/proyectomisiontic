import MenuLateral from 'components/menuLateral';
import Footer from 'components/Footer';
import React from 'react';
import 'styles/estiloMenuLateral.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';

import PrivateRoute from 'components/PrivateRoute';



const Layout = ({ children }) => {
  return (
    <PrivateRoute>
    <div>
      <div className='mainContainer'>
        <MenuLateral />
        <main>{children}</main>      
      </div>
      <Footer />
    </div>
  </PrivateRoute>
  );

};

export default Layout;