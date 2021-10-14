import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading , loginWithRedirect} = useAuth0();
  console.log(isAuthenticated);
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
