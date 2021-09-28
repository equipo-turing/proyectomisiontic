import MenuLateral from 'components/menuLateral';
import Footer from 'components/Footer';
import React from 'react';
import 'styles/estiloMenuLateral.css'




const Layout = ({ children }) => {
  return (
    <div>
      <div className='mainContainer'>
      <MenuLateral />
      <main>{children}</main>      
     </div>
     
     <Footer />

    </div>
  );
};

export default Layout;