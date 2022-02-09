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
                console.log(this.responseText)
            }
        }
        // $.ajax({
        //     method: "POST",
        //     url: "../formulario-contacto.json",
        //     data:{
        //         correcto,
        //         error,
        //     },
        //     success: function (response){
        //         if (response != "") {
        //             console.log(response)
        //         }
        //     }
        // })
    })
})