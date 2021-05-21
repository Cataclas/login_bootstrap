$(".btn-recPassword, .btn-signIn, .btn-logIn, .btn-back").click(function(e) {
    e.preventDefault()
    let href = $(this).attr('href');
    $(this).parents('form').removeClass('show').addClass('hide');

    $("form").each(function() {
        let id = $(this).attr('id');
        if (id == href) {
            $(this).removeClass('hide').addClass('show')
        }
    });
});

$("#logIn").validate({
    rules: {
        usuario: "required",
        contraseña: "required"
    },
    messages: {
        usuario: {
            required: "Item obligatorio"
        },
        contraseña: {
            required: "Item obligatorio"
        }
    },
});
$("#recPassword").validate({
    rules: {
        usuario: "required",
    },
    messages: {
        usuario: {
            required: "Item obligatorio"
        }
    },
});
$("#signIn").validate({
    rules: {
        nombreCompleto: {
            required: true,
            minlength: 10
        },
        telefono: {
            required: true,
            number: true,
            minlength: 7
        },
        email: {
            required: true,
            email: true
        },
        contraseña: {
            required: true,
            minlength: 10
        },
        confContraseña: {
            required: true,
            equalTo: "#signIn input[name=contraseña]"
        },
    },
    messages: {
        nombreCompleto: {
            required: "Item obligatorio",
            minlength: "El nombre debe tener al menos 10 caracteres"
        },
        telefono: {
            required: "Item obligatorio",
            number: "Ingrese un número válido",
            minlength: "El teléfono debe tener al menos 7 caracteres"
        },
        email: {
            required: "Item obligatorio",
            email: "Ingrese un email válido"
        },
        contraseña: {
            required: "Item obligatorio",
            minlength: "La contraseña debe tener al menos 10 caracteres"
        },
        confContraseña: {
            required: "Item obligatorio",
            equalTo: "Confirme la contraseña"
        }
    },
});