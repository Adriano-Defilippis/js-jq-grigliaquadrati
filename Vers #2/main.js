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



//Funzine generatrice di stringhe da passare ad altra funzione
function divGenerator(maxNumSquareOfRow){

  var str = "";

  for (var i = 0; i < maxNumSquareOfRow; i++) {
    str += "<div class='square'><div class='hiddenHide'></div></div>"
  }
  return str
}




//Funzione per inserire un numero preciso di div nell'html
function rowGenerator(numOfRow, strIdContainerSelector, strClassRowSelector, totDivisoNumQuadrati){

  var container = document.getElementById(strIdContainerSelector);
  //Ciclo per creare le Row con classe .row
  for (var i = 0; i < numOfRow; i++) {


    container.innerHTML += "<div class='row'>" + divGenerator(8) +"</div>";
  }
  return container
}






//Esecuzione del codice
$(document).ready(function(){

  //Avvio la generazione random delle Row della mia griglia, mentre per le caselle vado a cambiare parametri alla funzione interna
  // divGenerator()
  rowGenerator(8,"griglia", "row", 8);

  //Ritorna un array di oggetti con tutti i quadrati dell'html
  console.log(square);


  // Memorizzo in una variabile l'array di numeri randomici che ritorna dalla Funzione per creare numeri random
  var randomIndex = genNumRandom(0, 63, 15);

  //Creo l'evento click per mostrare il quadratino coperto (JQuery)
  var square = $('.square');
  var hiddenHide = $('.hiddenHide');



  //Evento del click sul quadrato
  square.click(function(){

    //Memorizzo l'elemento figlio di square (hiddenHide) in una variabile per richiamare la timing function solo sull'elemento dove è attiva la funzione
    var squareChildren = $(this).children();

    // Il Quadrato mostra il contenuto
    squareChildren.hide(500, function(){

      //Timing function di fine animazione per far riapparire lo sfondo bianco
      setTimeout(function(){

      //Il Quadrato di chiude
      squareChildren.show(500);

      },2000);

    });

  });



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

console.log(divGenerator(8));


//---------------- FINE BLOCCO GENERATORE GRIGLIA ED OUTPUT DI BASE ----------------------//


//---------------- BLOCCO REGOLE, CONTEGGIO PUNTI E VINCITA O PERDITA --------------------//
