$( document ).ready(function() {    
    const formularioInscribirse = $("#formulario-inscribirse")

    const formInscNombre = $("#form-insc-nombre")
    const formInscApellido = $("#form-insc-apellido")
    const formInscEmail = $("#form-insc-email")

    const alertNombre = $("#alert-insc-nombre")
    const alertApellido = $("#alert-insc-apellido")
    const alertEmail = $("#alert-insc-email")

    const alertSuccess = $("#alert-insc-success")

    const regFormInscNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormInscApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormInscEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    const pintarMensajeExito = () => {
        alertSuccess.text("")
        alertSuccess.removeClass("d-none")
        alertSuccess.prepend("Mensaje enviado con éxito") 
    }

    const pintarMensajeError = (errores) => {
        errores.forEach( item => {
            alertSuccess.addClass("d-none")
            item.tipo.removeClass("d-none");
            item.tipo.text(item.msg) 
            item.tipo.addClass("is-invalid")
        });
    }

    formularioInscribirse.on("submit", (e) => {
        e.preventDefault()
        alertSuccess
        const errores = []

        if(!regFormInscNombre.test(formInscNombre.val())) {
            formInscNombre.addClass("is-invalid")
            
            errores.push({
                tipo: alertNombre,
                msg: "Formato no válido en el campo nombre, solo se permiten letras."
            })
        } else {
            formInscNombre.removeClass("is-invalid")
            formInscNombre.addClass("is-valid")
            alertNombre.addClass("d-none")
        }

        if(!regFormInscApellido.test(formInscApellido.val())) {   
            formInscApellido.addClass("is-invalid") 
                
            errores.push({
                tipo: alertApellido,
                msg: "Formato no válido en el campo apellido, solo se permiten letras.."
            })
        } else {
            formInscApellido.removeClass("is-invalid")
            formInscApellido.addClass("is-valid")
            alertApellido.addClass("d-none")
        }

        if(!regFormInscEmail.test(formInscEmail.val())) {
            formInscEmail.addClass("is-invalid")

            errores.push({
                tipo: alertEmail,
                msg: "Escriba un correo válido."
            })
        } else {
            formInscEmail.removeClass("is-invalid")
            formInscEmail.addClass("is-valid")
            alertEmail.addClass("d-none")
        }

        if (errores.length !== 0) {
            pintarMensajeError(errores);
            return;
        }

        pintarMensajeExito()
    })
})