window.addEventListener("DOMContentLoaded",(e)=>{
    window.addEventListener("scroll",(e)=>{
        let menuPrincipal=document.getElementById("menuPrincipal");
        if(window.scrollY===0){
            menuPrincipal.css({
                "height":"100px",
                "transition":"1s"
            })
        }
        else {
            menuPrincipal.css({
                "height": "50px",
                "transition": "1s"
            })
        }
    });

    let irIzdas=document.getElementsByClassName("irIzda");
    irIzdas.on("click",function(e) {
        e.preventDefault();
        let contenedor = e.target
            .parentElement.parentElement.parentElement
            .getElementsByClassName("franjaDesplazamiento")[0];
        let ficha = contenedor.querySelector(".ficha:first-of-type");
        let anchoFicha = ficha.offsetWidth;
        let paddingFicha = parseInt(
            window.getComputedStyle(ficha, null)
                .getPropertyValue("padding")
        );
        let margenFicha = parseInt(
            window.getComputedStyle(ficha, null)
                .getPropertyValue("margin")
        );
        let desplazamiento = anchoFicha + margenFicha + paddingFicha;
        let left = parseInt(contenedor.style.left);
        if (isNaN(left)) left = 0;
        let nuevaFicha = ficha.cloneNode(true);
        contenedor.appendChild(nuevaFicha);
        contenedor.css({
            left: (left - desplazamiento) + "px",
            transition:"1s"
        });
        /*contenedor.css({
            left: 0,
            transition: "all 1s ease-in"
        });*/
    });

    document.getElementsByClassName("franjaDesplazamiento").on("transitionend",(e)=>{
        let ficha=e.target.querySelector(".ficha:first-of-type");
        ficha.remove();
        e.target.css({
            left:0,
            transition:"all 0s ease 0s"
        })


    })

/*
            $contenedor.css("left", desplazamiento + "px");
            $contenedor.append($ficha);
            $contenedor.finish().animate({
                left: `-=${desplazamiento}px`
            });
        }
    });
/*
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
    });*/
});