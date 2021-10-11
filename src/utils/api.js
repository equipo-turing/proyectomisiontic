import axios from 'axios';

export const obtenerVendedores = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: 'http://localhost:5000/vendedores/' };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const crearVendedor = async (data,callBackResponse,callBackError) => {
  const options = { method: 'POST', url: 'http://localhost:5000/vendedores/' ,data};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElVendedor = async (identificacionVendedor,nuevoVendedor,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/vendedores/${identificacionVendedor._id}/`,
    headers: { 'Content-Type': 'application/json' },
    data: nuevoVendedor,
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const eliminarElVendedor = async (id,callBackResponse,callBackError) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/vendedores/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const obtenerUsuarios = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const crearUsuario = async (nuevoUsuario,callBackResponse,callBackError) => {
  const options = { method: 'POST', url: 'http://localhost:5000/usuarios/' ,data:nuevoUsuario};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElUsuario = async (identificacionUsuario,nuevoUsuario,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${identificacionUsuario._id}/`,
    headers: { 'Content-Type': 'application/json' },
    data: nuevoUsuario,
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const eliminarElUsuario = async (id,callBackResponse,callBackError) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};