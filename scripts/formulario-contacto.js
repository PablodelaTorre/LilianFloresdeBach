$(document).ready(function() {
    const formularioContacto = $("#formulario-contacto") 
    const nombreContacto = $("#nombre-contacto").val()
    const apellidoContacto = $("#apellido-contacto").val()
    const emailContacto = $("#email-contacto").val()
    const textoContacto = $("#texto-contacto").val()

    const errorContacto = $("#error-contacto")
    const correctoContacto = $("#correcto-contacto")

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
                if (nombreContacto != "" && apellidoContacto != "" && emailContacto != "" && textoContacto != ""){
                    correctoContacto.text = arrEstados[0]
                    correctoContacto.fadeIn(3000).fadeOut(3000)
                }else{
                    errorContacto.text = arrEstados[1]
                    errorContacto.fadeIn(3000).fadeOut(3000)
                }
            }
        }
    })
})