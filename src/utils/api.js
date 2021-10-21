import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};
export const obtenerVendedores = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: 'https://fathomless-mesa-97310.herokuapp.com/vendedores/' 
  ,headers: {
    Authorization: getToken(),
  },};
  localStorage.setItem('options_vendedores', options.Authorization);

  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const crearVendedor = async (data,callBackResponse,callBackError) => {
  const options = { method: 'POST', url: 'https://fathomless-mesa-97310.herokuapp.com/vendedores/' ,data,headers: { Authorization: getToken(), }};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElVendedor = async (identificacionVendedor,nuevoVendedor,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `https://fathomless-mesa-97310.herokuapp.com/vendedores/${identificacionVendedor._id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken(), },
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
    url: `https://fathomless-mesa-97310.herokuapp.com/vendedores/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken(), },
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};
export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://fathomless-mesa-97310.herokuapp.com/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const obtenerUsuarios = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: 'https://fathomless-mesa-97310.herokuapp.com/usuarios/',headers: {
    Authorization: getToken(),
  }, };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const crearUsuario = async (nuevoUsuario,callBackResponse,callBackError) => {
  const options = { method: 'POST', url: 'https://fathomless-mesa-97310.herokuapp.com/usuarios/' ,data:nuevoUsuario,headers: { 'Content-Type': 'application/json',Authorization: getToken(), }};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElUsuario = async (identificacionUsuario,nuevoUsuario,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `https://fathomless-mesa-97310.herokuapp.com/usuarios/${identificacionUsuario._id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken(), },
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
    url: `https://fathomless-mesa-97310.herokuapp.com/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json' , Authorization: getToken(),},
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const obtenerProductos = async (callBackResponse,callBackError)=>{
  const options = {method: 'GET', url: 'https://fathomless-mesa-97310.herokuapp.com/producto/',headers: { Authorization: getToken(),}};
  await axios 
  .request(options)
  .then(callBackResponse)
  .catch(callBackError);
}

export const ActualizarProducto = async(codigo,editarProducto,callBackResponse,callBackError)=>{
  const options = {
    method: 'PATCH',
    url: 'https://fathomless-mesa-97310.herokuapp.com/productoeditar',
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {
     id: codigo._id,
      identificacion: editarProducto.identificacion,
      descripcion: editarProducto.descripcion,
      valorUnitario: editarProducto.valorUnitario,
      estado: editarProducto.estado
    }
  };
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);        
}


export const eliminarElProducto = async (productoid,callBackResponse,callBackError)=>{
  const options = {
    method: 'DELETE',
    url: 'https://fathomless-mesa-97310.herokuapp.com/productoeliminar',
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {id: productoid._id}
  };
  
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);
}

export const crearElProducto = async (nuevoProducto,callBackResponse,callBackError)=>{
  const options = {
    method: 'POST',
    url: 'https://fathomless-mesa-97310.herokuapp.com/productonuevo',
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {
      identificacion:nuevoProducto.identificacion,
      descripcion: nuevoProducto.descripcion,
      valorUnitario: nuevoProducto.valorUnitario,
      estado: nuevoProducto.estado
    }
  };

 await axios.request(options).then(callBackResponse).catch(callBackError);
}

//**********API REST VENTAS */
export const obtenerVentas = async(callBackResponse,callBackError)=>{
  const options = {method: 'GET', url: 'https://fathomless-mesa-97310.herokuapp.com/venta/'};
await axios.request(options).then(callBackResponse).catch(callBackError);
 
}


export const eliminarLaVenta = () => {
  
};

export const crearLaVenta = async (nuevaVenta,callBackResponse,callBackError)=>{
  const options = {
    method: 'POST',
    url: 'https://fathomless-mesa-97310.herokuapp.com/ventanueva/',
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {
      identificador: nuevaVenta.identificador,
      valorTotalVenta: nuevaVenta.valorTotalVenta,
      cantidad:nuevaVenta.cantidad,
      precioUnitario: nuevaVenta.precioUnitario,
      fechaVenta:nuevaVenta.fechaVenta,
      identificacionCliente:nuevaVenta.identificacionCliente,
      nombreCliente: nuevaVenta.nombreCliente,
      nombreVendedor: nuevaVenta.nombreVendedor,
      estado: nuevaVenta.estado
    }
  };

   await axios.request(options).then(callBackResponse).catch(callBackError);
  
 
}