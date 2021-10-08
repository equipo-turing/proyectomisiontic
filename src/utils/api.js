import axios from 'axios';

export const obtenerVendedores = async (setVendedores, setEjecutarConsulta = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/vendedores/' };
  await axios
    .request(options)
    .then(function (response) {
      setVendedores(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

export const obtenerUsuarios = async (setVendedores, setEjecutarConsulta = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };
  await axios
    .request(options)
    .then(function (response) {
      setVendedores(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};
