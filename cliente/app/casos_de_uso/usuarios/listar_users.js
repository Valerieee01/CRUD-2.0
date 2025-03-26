/**
 * @module app/casos_de_uso/usuarios/listar_users
 * @returns 
 */

export const listarUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:3000/usuarios");
      const generos = await response.json();
      return generos;
    } catch (error) {
      console.error(error);
    }
  };