export const eliminarId = (id) => {  
    fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
      });
}
