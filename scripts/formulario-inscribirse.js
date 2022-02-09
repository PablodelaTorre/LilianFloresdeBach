$( document ).ready(function() {    
    const formularioPrepadaros = $("#formulario-preparados")

    const formProdNombre = $("#form-prod-nombre")
    const formProdApellido = $("#form-prod-apellido")
    const formProdEmail = $("#form-prod-email")

    const alertNombre = $("#alert-nombre")
    const alertApellido = $("#alert-apellido")
    const alertEmail = $("#alert-email")

    const alertSuccess = $("#alert-success")

    const regFormProdNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormProdApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormProdEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    const pintarMensajeExito = () => {
        alertSuccess.removeClass("d-none")
        alertSuccess.prepend("Mensaje enviado con éxito") 
    }

    const pintarMensajeError = (errores) => {
        errores.forEach( item => {
            item.tipo.removeClass("d-none");
            item.tipo.text(item.msg) 
            item.tipo.addClass("is-invalid")
        });
    }

    formularioPrepadaros.on("submit", (e) => {
        e.preventDefault()
        alertSuccess
        const errores = []

        if(!regFormProdNombre.test(formProdNombre.val())) {
            formProdNombre.addClass("is-invalid")
            
            errores.push({
                tipo: alertNombre,
                msg: "Formato no válido en el campo nombre, solo se permiten letras."
            })
        } else {
            formProdNombre.removeClass("is-invalid")
            formProdNombre.addClass("is-valid")
            alertNombre.addClass("d-none")
        }

        if(!regFormProdApellido.test(formProdApellido.val())) {   
            formProdApellido.addClass("is-invalid") 
                
            errores.push({
                tipo: alertApellido,
                msg: "Formato no válido en el campo apellido, solo se permiten letras.."
            })
        } else {
            formProdApellido.removeClass("is-invalid")
            formProdApellido.addClass("is-valid")
            alertApellido.addClass("d-none")
        }

        if(!regFormProdEmail.test(formProdEmail.val())) {
            formProdEmail.addClass("is-invalid")

            errores.push({
                tipo: alertEmail,
                msg: "Escriba un correo válido."
            })
        } else {
            formProdEmail.removeClass("is-invalid")
            formProdEmail.addClass("is-valid")
            alertEmail.addClass("d-none")
        }

        if (errores.length !== 0) {
            pintarMensajeError(errores);
            return;
        }

        pintarMensajeExito()
    })
})