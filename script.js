var elementoDuvida = document.querySelectorAll('.duvida');

elementoDuvida.forEach(function(elemento){
    elemento.addEventListener('click', function(){
        elemento.classList.toggle('ativa');
    });
});