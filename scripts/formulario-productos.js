$(document).ready(function() {
    const formularioPrepadaros = $("#formulario-preparados")

    const formProdNombre = $("#form-prod-nombre")
    const formProdApellido = $("#form-prod-apellido")
    const formProdEmail = $("#form-prod-email")

    const botonEnviar = $("boton-enviar")

    const alertNombre = $("#alert-nombre")
    const alertApellido = $("#alert-apellido")
    const alertEmail = $("#alert-email")

    const alertSucces = $("#alert-succes")

    const regFormProdNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormProdApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormProdEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    const pintarMensajeExito = () => {
        alertSucces.removeClass("d-none")
        alertSucces.text("Mensaje enviado con éxito")
    }

    formularioPrepadaros.on("submit", (e) => {
        e.preventDefault()
        alertSucces.addClass("d-none")

        const errores = []

        if(!regFormProdNombre.test(formProdNombre.val)) {            
            errores.push({
                tipo: alertNombre,
                msg: "Formato no válido en el campo nombre, solo se permiten letras."
            })
        }

        if(!regFormProdApellido.test(formProdApellido.val)) {            
            errores.push({
                tipo: alertApellido,
                msg: "Formato no válido en el campo apellido, solo se permiten letras.."
            })
        }

        if(!regFormProdEmail.test(formProdEmail.val)) {
            errores.push({
                tipo: alertEmail,
                msg: "Escriba un correo válido."
            })
        }

        pintarMensajeExito()
    })

}) 


