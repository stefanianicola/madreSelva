// A $( document ).ready() block.
$( document ).ready(function() {

    var comoFuncionaTop = $('#comoFunciona').offset().top;

    $(".menu").on("click", ".js-autoscroll-cf", function(){
        $('html, body').animate({ scrollTop: comoFuncionaTop}, 1000);
    });

    var menuTop = $('#menu1').offset().top;
    
    $(".menu").on("click", ".js-autoscroll-m", function(){
        $('html, body').animate({ scrollTop: menuTop}, 1000);
    });

    var contactoTop = $('#contacto').offset().top;
    
    $(".menu").on("click", ".js-autoscroll-c", function(){
        $('html, body').animate({ scrollTop: contactoTop}, 1000);
    });

});