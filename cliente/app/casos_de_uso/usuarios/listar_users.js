/**
 * @module app/casos_de_uso/usuarios/listar_users
 * @returns 
 */

export const listarUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:3000/usuarios");
      const usuarios = await response.json();
      return usuarios;
    } catch (error) {
      console.error(error);
    }
  };