// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

//Creo l'evento click per mostrare il quadratino coperto (JQuery)
var square = $('.square');
var hiddenHide = $('.hiddenHide')



//Evento del click sul quadrato bianco
square.click(function(){

  $(this).children().hide(500, function(){

    //Timing function di fine animazione per far riapparire lo sfondo bianco
    setTimeout(function(){

      hiddenHide.show(500);

    },2000);

  });

});
