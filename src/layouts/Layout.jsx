import MenuLateral from 'components/menuLateral';
import Footer from 'components/Footer';
import React from 'react';
import 'styles/index.css';



const Layout = ({ children }) => {
  return (
    <div className='mainContainer'>
     <MenuLateral />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;