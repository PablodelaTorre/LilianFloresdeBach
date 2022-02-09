$(document).ready(function() {
    const formularioContacto = $("formulario-contacto") 
    formularioContacto.on("submit", (e) => {
        e.preventDefault()
        $.ajax({
            method: "POST",
            url: "../formulario-contacto.json",
            data:{
                correcto,
                error,
            },
            success: function (response){
                if (response != "") {
                    console.log(response)
                }
            }
        })
        
        
        // const xhttp = new XMLHttpRequest()
        // xhttp.open('GET', '../formulario-contacto.json', true)
        // xhttp.send()
        
        // xhttp.onreadystatechange = function(){
        //     if(this.readyState == 4 && this.status == 200){
        //         console.log(this.responseText)
        //     }
        // }
    })
})