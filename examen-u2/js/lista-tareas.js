console.log('Lista de Tareas');

const inputTarea = document.getElementById("taskInput")
const agregar = document.getElementById("agregar")
const lista = document.getElementById("taskList")

agregar.addEventListener("click", () => {
    const tarea = inputTarea.ariaValueMax.trim()

    if(tarea === ""){
        alert('No se puede agregar esta tarea')
        return;
    }    
})