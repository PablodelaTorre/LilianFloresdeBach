$(document).ready(function() {
    const formularioContacto = $("#formulario-contacto") 
    const nombreContacto = $("#nombre-contacto")
    const apellidoContacto = $("#apellido-contacto")
    const emailContacto = $("#email-contacto")
    const textoContacto = $("#texto-contacto")

    

    formularioContacto.on("submit", (e) => {
        e.preventDefault()
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', '../formulario-contacto.json', true)
        xhttp.send()
        
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const errorCorrecto = JSON.parse(this.responseText)
                console.log(errorCorrecto)
                let arrEstados =[]
                for(let i = 0; i < errorCorrecto.length; i++){
                    arrEstados.push(errorCorrecto[i].estado)
                }
                console.log(arrEstados)
                if (nombreContacto.val() != "" && apellidoContacto.val() != "" && emailContacto.val() != "" && textoContacto.val() != ""){
                    document.getElementById("correcto-contacto").innerText = ""
                    document.getElementById("error-contacto").innerText = ""
                    document.getElementById("correcto-contacto").innerText = arrEstados[0] 
                    $("#correcto-contacto").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)
                }else{
                    document.getElementById("correcto-contacto").innerText = ""
                    document.getElementById("error-contacto").innerText = ""
                    document.getElementById("error-contacto").innerText = arrEstados[1] 
                    $("#error-contacto").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)
                }
            }
        }
    })
})