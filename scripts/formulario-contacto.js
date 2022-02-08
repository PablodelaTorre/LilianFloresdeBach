$(document).ready(() => {
    const formularioContacto = $("formulario-contacto") 
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
    })
})