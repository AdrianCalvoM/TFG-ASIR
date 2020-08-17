HTMLCollection.prototype.css=function(objetoCSS){
    for(let elemento of this){
        for(let i in objetoCSS){
            elemento.style[i]=objetoCSS[i];
        }
    }
};

HTMLCollection.prototype.addClass=function(clase){
    for(let elemento of this){
        elemento.classList.add(clase);
    }
};

HTMLCollection.prototype.removeClass=function(clase){
    for(let elemento of this){
        elemento.classList.remove(clase);
    }
};

HTMLCollection.prototype.toggleClass=function(clase){
    for(let elemento of this){
        elemento.classList.toggle(clase);
    }
};

HTMLCollection.prototype.on=function(tipoEvento,accion){
    for(let elemento of this){
        elemento.addEventListener(tipoEvento,accion);
    }
};

HTMLElement.prototype.css=function(objetoCSS){
    for(let i in objetoCSS){
        this.style[i]=objetoCSS[i];
    }
};

