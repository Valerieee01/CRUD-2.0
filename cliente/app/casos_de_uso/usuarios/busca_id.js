
export const buscarId = (clase) => {
    
    document.addEventListener("click", (e) => {
        
        if(e.target.matches(clase)){
            console.log(e.target);
            const id = e.target.dataset.id
            alert(`El id del usuario: ${id}`)
        }
    });
}

