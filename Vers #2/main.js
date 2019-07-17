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
  temporanea;

  return temporanea.sort();
}

//Funzione per inserire un numero preciso di div nell'html
function squareGenerator(numOfRow, strIdSelectorJs){

  var container = document.getElementById(strIdSelectorJs);
  // var value = container.innerHTML;
  // var temporary = container.innerHTML;


  for (var i = 0; i < numOfRow; i++) {
    // temporary = container.innerHTML;
    // // temporary = container.innerHTML = ("<div class='row'></div>");
    // temporary = ("<div class='row'></div>");
    // console.log("siamo dentro il for ", temporary);

    container.innerHTML += "<div class='row'></div>";

  }
  // console.log("Siamo fuori il for" ,temporary);
  //
  return container
}



//Esecuzione del codice
$(document).ready(function(){


  // Memorizzo in una variabile l'array di numeri randomici che ritorna dalla Funzione
  var randomIndex = genNumRandom(0, 63, 15);

  //Creo l'evento click per mostrare il quadratino coperto (JQuery)
  var square = $('.square');
  var hiddenHide = $('.hiddenHide');



  //Evento del click sul quadrato
  square.click(function(){

    //Memorizzo l'elemento figlio di square (hiddenHide) in una variabile per richiamare la timing function solo sull'elemento dove è attiva la funzione
    var squareChildren = $(this).children();

    squareChildren.hide(500, function(){

      //Timing function di fine animazione per far riapparire lo sfondo bianco
      setTimeout(function(){

      squareChildren.show(500);

      },2000);

    });

  });



  //Ritorna un array di oggetti con tutti i quadrati dell'html
  console.log(square);
  //Ritorno dell'array con i numeri randomici
  console.log("Array degli indici randomici ", randomIndex);


  //Attraverso gli oggetti con la classe CSS .square con il selettore di JQuery, square = $('.square')
  for (var i = 0; i < square.length; i++) {

    //Controllo se il valore dell'indice è tra i miei numeri random
    if (randomIndex.includes(i)) {

      //Se lo è, aggiunge una classe con background red con metodo JS all'oggetto in questione e non a tutti gli oggetti
      square[i].classList.add("bg-red");


      console.log("oggetti ai quali aggiungo la classe bg-red ", square[i], " indice: ", i);
    }

  }

});

squareGenerator(8,"griglia");

//---------------- FINE BLOCCO GENERATORE GRIGLIA ED OUTPUT DI BASE ----------------------//


//---------------- BLOCCO REGOLE, CONTEGGIO PUNTI E VINCITA O PERDITA --------------------//
