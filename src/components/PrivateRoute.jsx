import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      // si se quieren hacer validaciones con el token:
      // if (localStorage.getItem('token')) {
      //   // validar fecha de expiracion del token
      // } else {
      //   // pedir token
      // }
      const accessToken = await getAccessTokenSilently({
        audience: `api-turing-mintic`,
      });
      localStorage.setItem('token', accessToken);
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);
  
  if (isLoading) {
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;
  }

  localStorage.setItem('isAuthenticated', isAuthenticated);
  if (!isAuthenticated){
    return loginWithRedirect();
  }
  {/*if (!isAuthenticated){
    return loginWithRedirect();
  }*/}
  return <> {children} </>;
 
};

export default PrivateRoute;
