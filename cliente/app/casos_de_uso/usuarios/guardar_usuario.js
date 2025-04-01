/**
 * Función para enviar los datos del formulario al servidor, recibe un objeto con los datos del formulario y retorna un objeto con la respuesta del servidor
 * @param {*} data 
 * @returns 
 */
export const guardar_usuario = async (data) => {
  // Enviamos los datos al servidor por medio de una petición fetch y el método POST
  const envio = await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  // Capturamos la respuesta del servidor
  const respuesta = await envio.json();
  // Retornamos la respuesta del servidor
  return { "status": envio.status, "data": respuesta };
};