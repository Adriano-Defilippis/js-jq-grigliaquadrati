// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

//Creo l'evento click per mostrare il quadratino coperto (JQuery)
var square = $('.square');
var hiddenHide = $('.hiddenHide')



//Evento del click sul quadrato bianco Mostra/Nascondi
square.click(function(){

  //Memorizzo l'elemento filgio in una variabile per richiamare la timing function solo sull'elemento dove è attiva la funzione
  var thisChildren = $(this).children();

  thisChildren.hide(500, function(){

    //Timing function di fine animazione per far riapparire lo sfondo bianco
    setTimeout(function(){

    thisChildren.show(500);

    },2000);

  });

});
