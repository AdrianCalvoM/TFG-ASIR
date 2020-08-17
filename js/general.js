const ANCHO_MINIMO_MENU=800;
$(function (e) {
    //Generar botones de cerrar en los submenús
    $(".submenu").prepend("<a href='#' class='cerrar'><i class='fas fa-times'></i></a>");

    //controlar que aparezca el menú completo si el tamaño lo permite
    $(window).on("resize",(e)=>{
        if(window.width<=ANCHO_MINIMO_MENU)
            $("#enlaces").css("display","block");

    });

    //clic en logo
    $("#logo").on("click",(e)=>{
        location="/index.html";
    });

    //menú superior
    $("#fondo").scroll(function (e) {
        if ($(this).scrollTop() == 0) {
            $("#menuPrincipal").css({
                "height": "100px",
                "transition": "1s"
            });
            $("#enlaces").css({
                "top": "100px",
                "transition": "1s"
            });
            $(".submenu").css({
                "top":"100px",
                "transition":"1s"
            });
        } else {
            $("#menuPrincipal").css({
                "height": "50px",
                "transition": "1s"
            });
            $("#enlaces").css({
                "top": "65px",
                "transition": "1s"
            });
            $(".submenu").css({
                "top":"50px",
                "transition":"1s"
            });
        }
    });

    //****MANEJO DE MENÚS
    //Icono de menu
    $("#iconoMenu").on("click", (e) => {
        $("#enlaces").slideToggle();
        $icono = $("#iconoMenu i");
        $icono.toggleClass("fa-bars");
        $icono.toggleClass("fa-times");
        $(".submenu").slideUp();
    });
    //Enlaces de menú
    $(".itemMenuPrincipal").on("click",(e)=>{
        let $target=$(e.target);
        let id = $target.attr("id").replace("enlace", "");
        var $id=$("#"+id);
        let tiempo=0; //control para saber si se debe esconder primero otros menús
        $(".submenu").each((i,elto)=>{
            if($(elto).attr("id")!=$id.attr("id") && $(elto).css("display")!="none") {
                tiempo=500;
                $(elto).slideUp(tiempo);
            }
        });
        setTimeout(()=>$id.slideToggle(),tiempo);
    });
    //******************SUBMENÚS
    //Ocultar submenús al hacer clic fuera
    $("main,header").on("click",(e)=>{
        console.log($("#enlaces ul li").css("display"));
        if($("#enlaces ul li").css("display")=="block") {
            let $icono = $("#iconoMenu i");
            $icono.removeClass("fa-times");
            $icono.addClass("fa-bars");
            $("#enlaces").slideUp();
        }
        $(".submenu").slideUp();
    });
    //cerrar submenu
    $(".submenu .cerrar").on("click",(e)=>{
        $(e.target.parentElement.parentElement).slideUp();
    });
    //clic en cualquier parte del menú abre enlace
    $(".submenu li").on("click",(e)=>{
        location=$(e.target).find("a").attr("href");
    });

    //Carrusel
    $(".irIzda").on("click", function (e) {
        e.preventDefault();
        let $contenedor = $(this).parent().parent().find(".franjaDesplazamiento");
        if ($contenedor.is(":animated") == false) {
            let $ficha = $contenedor.find(".ficha:first-of-type");
            let anchoFicha = $ficha.width();
            let paddingFicha = $ficha.css("padding-left").replace("px", "");
            let margenFicha = $ficha.css("margin-left").replace("px", "");
            let desplazamiento = anchoFicha + 2 * margenFicha + 2 * paddingFicha;
            $contenedor.css("left", desplazamiento + "px");
            $contenedor.append($ficha);
            $contenedor.finish().animate({
                left: `-=${desplazamiento}px`
            });
        }
    });

    $(".irDcha").on("click", function (e) {
        e.preventDefault();
        let $contenedor = $(this).parent().parent().find(".franjaDesplazamiento");
        if ($contenedor.is(":animated") == false) {
            let $ficha = $contenedor.find(".ficha:last-of-type");
            let anchoFicha = $ficha.width();
            let paddingFicha = $ficha.css("padding-left").replace("px", "");
            let margenFicha = $ficha.css("margin-left").replace("px", "");
            let desplazamiento = anchoFicha + 2 * margenFicha + 2 * paddingFicha;
            $contenedor.css("left", -desplazamiento + "px");
            $contenedor.prepend($ficha);
            $contenedor.finish().animate({
                left: `+=${desplazamiento}px`
            });
        }
    });


    $(".fichaServicios").on("click", function (e) {
        let $a = $(this).find("a");
        window.open($a.attr("href"), "_blank");
    });
    $(".ficha")
        .on("click", function (e) {
            let $a = $(this).find("a");
            if($a.length>0) {
                window.open($a.attr("href"), "_blank");
            }
        });

    $(".mapaLink").on("click", function (e) {
        let $a = $(this).find("a");
        window.open($a.attr("href"), "_blank");
    });

    $("#velo").on("click",(e)=>{
       $("#velo").fadeOut(1000);
    });
    $(".fotoAmpliable").on("click",(e)=>{
        let src;
        let imgGrande;
        if($(e.target).is("img")){
            src=$(e.target).attr("src");
        }
        else{
            src=$(e.target).find("img").attr("src");
        }
        src = $(e.target).attr("src").replace(".jpg", "");
        imgGrande=`<img src='${src}-larga.jpg' alt='foto Asir'>`;
        $("#contenidoVelo").html(imgGrande);
        $("#velo").fadeIn(1000);
    });

    $(".miniImagen").on("click", (e) => {
        let ruta = $(e.target).attr("src").replace(".jpg", "");
        $("#fondoImagenSuelta").css("background-image", `url(${ruta}-larga.jpg)`);
        $("#fondoImagenSuelta").toggleClass("mostrar");
    });

    $("#fondoImagenSuelta").on("click", (e) => {
        $("#fondoImagenSuelta").toggleClass("mostrar");
    });
    //Petición de más información a través del formulario
    $('#formInfo')
        .on('submit', function (event) {
            event.preventDefault(); // prevent reload


            var formData = new FormData(this);
            formData.append('service_id', 'web_centrodonbosco_es');
            formData.append('template_id', 'template_jYBOogsN_clone');
            formData.append('user_id', 'user_nvnuVtAepni7Uh7umJm4V');

            $("#infoConsulta").html("<p>Enviando los datos...</p>");
            $("#btInfoConsulta").attr("disabled", true);

            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function () {
                $("#infoConsulta").html("<p class='success'>Los datos se enviaron Correctamente</p>");
            }).fail(function (error) {
                let textError = JSON.stringify(error);
                if (textoError.indexOf("g-recaptcha") !== -1) {
                    $("#infoConsulta").html(`<p class='error'>Fallo en el recaptcha</p>`);
                    $("#btInfoConsulta").attr("disabled", false);
                } else {
                    $("#infoConsulta").html(`<p class='error'>Error en el envío de datos</p>`);
                }
            });
        })
        .on("change", (e) => {
            $("#btInfoConsulta").attr("disabled", false);
        })





});