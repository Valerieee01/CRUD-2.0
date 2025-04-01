/**
 * Función para cargar los documentos de la base de datos
 * @module app/casos_de_uso/documentos/listar_documentos
 * @returns
 */
export const listarDocumentos = async () => {
  try {
    const response = await fetch("http://localhost:3000/documentos");
    const documentos = await response.json();
    return documentos;
  } catch (error) {
    console.error(error);
  }
};
