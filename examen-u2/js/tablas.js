console.log('Tablas');

document.querySelector("#generar-tabla").addEventListener("click", ()=> {
    const numero = parseInt(document.getElementById("number").value)
    const limite = parseInt(document.getElementById("limit").value)
    const result = document.getElementById("result")
    
    result.innerHTML = ""


    for(let i = 1; i <= limite; i++){
        result.innerHTML += `${numero} x ${i} = ${ numero * i}\n`
        
    }
})

