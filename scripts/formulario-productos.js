$(document).ready(function() {
    const formularioPrepadaros = $("#formulario-preparados")

    const formProdNombre = $("#form-prod-nombre")
    const formProdApellido = $("#form-prod-apellido")
    const formProdEmail = $("#form-prod-email")
    const formProdText = $("#form-prod-text")

    const alertNombre = $("#alert-nombre")
    const alertApellido = $("#alert-apellido")
    const alertEmail = $("#alert-email")

    const alertSucces = $("#alert-succes")

    const regFormProdNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormProdApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regFormProdEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

}) 


