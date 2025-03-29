export const buscarId = (id) => {
    let genero = prompt("Ingrese el genero: ")
    fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            genero : genero
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    alert(`El id del usuario: ${id}`)
}
