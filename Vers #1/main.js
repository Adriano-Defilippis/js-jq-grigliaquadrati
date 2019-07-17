// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


//Funzione per creare dei numeri random
function genNumRandom(max, min, repeat){
  var n = Math.floor(Math.random() * (max - min) + min);
  var temporanea = [];

  for (var i = 0; i < repeat; i++) {
    n = Math.floor(Math.random() * (max - min) + min);

    //Controllo che nell'array non ci sia già il numero random 
    if (temporanea.includes(n)) {
      i--;
    }else{
      temporanea.push(n);
    }


  }
  return temporanea;
}


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


console.log($('.square'));

//Ritorna un array di oggetti con tutti i quadrati nell'hatml
console.log(square);

genNumRandom(0, 63, 15);
console.log(genNumRandom(0, 63, 15));




for (var i = 0; i < square.length; i++) {
  square[i];
  console.log("Oggetto: ", square[i], "indice: ", [i]);


}
