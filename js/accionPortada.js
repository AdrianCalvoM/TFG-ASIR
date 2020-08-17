$(function(e){
    $(window).scroll(function(e){
        if($(this).scrollTop()==0){
            $("#menuPrincipal").css({
                "height":"100px",
                "transition":"1s"
            })
        }
        else {
            $("#menuPrincipal").css({
                "height": "50px",
                "transition": "1s"
            })
        }
    });
    $(".irIzda").on("click",function(e){
        e.preventDefault();
        let $contenedor=$(this).parent().parent().find(".franjaDesplazamiento");
        if($contenedor.is(":animated")==false) {
            let $ficha=$contenedor.find(".ficha:first-of-type");
            let anchoFicha=$ficha.width();
            let paddingFicha=$ficha.css("padding-left").replace("px","");
            let margenFicha=$ficha.css("margin-left").replace("px","");
            let desplazamiento=anchoFicha+2*margenFicha+2*paddingFicha;
            $contenedor.css("left", desplazamiento + "px");
            $contenedor.append($ficha);
            $contenedor.finish().animate({
                left: `-=${desplazamiento}px`
            });
        }
    });

    $(".irDcha").on("click",function(e){
        e.preventDefault();
        let $contenedor=$(this).parent().parent().find(".franjaDesplazamiento");
        if($contenedor.is(":animated")==false) {
            let $ficha=$contenedor.find(".ficha:last-of-type");
            let anchoFicha=$ficha.width();
            let paddingFicha=$ficha.css("padding-left").replace("px","");
            let margenFicha=$ficha.css("margin-left").replace("px","");
            let desplazamiento=anchoFicha+2*margenFicha+2*paddingFicha;
            $contenedor.css("left",-desplazamiento + "px");
            $contenedor.prepend($ficha);
            $contenedor.finish().animate({
                left: `+=${desplazamiento}px`
            });
        }
    });
});