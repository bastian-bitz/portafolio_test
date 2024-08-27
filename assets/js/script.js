
$(document).ready(function () {
    // Verifica si el body tiene la clase 'dark-mode' y actualiza el interruptor de modo oscuro en consecuencia.
    if ($('body').hasClass('dark-mode')) {
        $("#dark-mode-toggle").html('<i class="bi bi-sun"></i>');
    } else {
        $("#dark-mode-toggle").html('<i class="bi bi-moon"></i>');
    }

    // Verificar si el modo oscuro está activado en el localStorage al cargar la página
    if (localStorage.getItem('dark-mode') === 'enabled') {
        $('body').addClass('dark-mode');
        $('#dark-mode-toggle').html('<i class="bi bi-sun"></i>');
        $('#olas').hide();
        $('#olas_n').show();
    } else {
        $('#olas_n').hide();
        $('#olas').show();
    }

    // Alternar el modo oscuro y guardar el estado en localStorage
    $("#dark-mode-toggle").click(function () {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            $(this).html('<i class="bi bi-sun"></i>');
            localStorage.setItem('dark-mode', 'enabled');
                $('#olas').hide();
                $('#olas_n').show();
        } else {
            $(this).html('<i class="bi bi-moon"></i>');
            localStorage.setItem('dark-mode', 'disabled');
                $('#olas_n').hide();
                $('#olas').show();
            
        }
    });
    if(window.innerWidth <776){
        $('#card_sm').show()
        $('.carta').hide()
    }else{
        $('#card_sm').hide()
    }
    $(document).click(function (event) {
        if (window.innerWidth >= 576) { 
            if (!$(event.target).closest(".carta").length) { /*Contrae '.carta' cuando se hace clic fuera de él.*/
                $("#resumen .texto-agregado").remove();
                $(".carta").removeClass('ocultar-after');
                $(".carta").css({
                    "max-width": "600px",
                    "font-size": "large"
                });
                $("#texto_resumen").show();
                $("#texto_oculto").hide();
            }
        }
    });

    $(".carta").click(function () {
        if (window.innerWidth >= 992) {
            $(".carta").addClass('ocultar-after'); /*expande '.carta' y muestra contenido adicional.*/
            $(this).css({
                "max-width": "100%"
            }, 2);
            $(this).css({
                "font-size": "28px"
            });
            $("#texto_resumen").hide();
            $("#texto_oculto").show();
            $("#img_portada").css({
                "width": "100%", 
                "height": "auto",
            });
        }
        else if (window.innerWidth >= 576) {
            $(".carta").addClass('ocultar-after'); // Expande '.carta' y muestra contenido adicional.
            $(".carta").css({
                "max-width": "100%",
                "font-size": "20px"
            });
            $("#texto_resumen").hide();
            $("#texto_oculto").show();
            $("#img_portada").css({
                "width": "100%", 
                "height": "auto"
            });
        }else{
            $("#texto_resumen").hide();
            $("#texto_oculto").show();
        }
    });
    $('#btn-home').click(function(){
        window.location.href = 'index.html'
    })
    $('.card-proyecto').click(function (e) { 
        e.preventDefault();
        var imgSrc = $(this).find('img').attr('src');
        $('body').append(`
            <div class="fullscreen-image">
                <img src="${imgSrc}" alt="Fullscreen Image">
            </div>
        `);
    });

    // Cerrar la imagen en pantalla completa al hacer clic en cualquier parte de la pantalla
    $('body').on('click', '.fullscreen-image', function() {
        $(this).remove();
    });
});

