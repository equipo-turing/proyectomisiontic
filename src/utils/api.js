import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};
export const obtenerVendedores = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: 'http://localhost:5000/vendedores/' 
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
  const options = { method: 'POST', url: 'http://localhost:5000/vendedores/' ,data,headers: { Authorization: getToken(), }};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElVendedor = async (identificacionVendedor,nuevoVendedor,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/vendedores/${identificacionVendedor._id}/`,
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
    url: `http://localhost:5000/vendedores/${id}/`,
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
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const obtenerUsuarios = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/',headers: {
    Authorization: getToken(),
  }, };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const crearUsuario = async (nuevoUsuario,callBackResponse,callBackError) => {
  const options = { method: 'POST', url: 'http://localhost:5000/usuarios/' ,data:nuevoUsuario,headers: { 'Content-Type': 'application/json',Authorization: getToken(), }};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElUsuario = async (identificacionUsuario,nuevoUsuario,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${identificacionUsuario._id}/`,
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
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json' , Authorization: getToken(),},
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const obtenerProductos = async (callBackResponse,callBackError)=>{
  const options = {method: 'GET', url: 'http://localhost:5000/producto/',headers: { Authorization: getToken(),}};
  await axios 
  .request(options)
  .then(callBackResponse)
  .catch(callBackError);
}

export const ActualizarProducto = async(codigo,editarProducto,callBackResponse,callBackError)=>{
  const options = {
    method: 'PATCH',
    url: 'http://localhost:5000/productoeditar',
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
    url: 'http://localhost:5000/productoeliminar',
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {id: productoid._id}
  };
  
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);
}

export const crearElProducto = async (nuevoProducto,callBackResponse,callBackError)=>{
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/productonuevo',
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
  const options = {method: 'GET', url: 'http://localhost:5000/venta/'};
await axios.request(options).then(callBackResponse).catch(callBackError);
 
}


export const eliminarLaVenta = async (venta,callBackResponse,callBackError)=>{
  const options = {
    method: 'DELETE',
    url: 'http://localhost:5000/ventaeliminar/',
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {id: venta._id}
  };
  
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);
}

export const crearLaVenta = async (nuevaVenta,callBackResponse,callBackError)=>{
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventanueva/',
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