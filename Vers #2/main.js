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


  // Memorizzo in una variabile l'array di numeri randomici che ritorna dalla Funzione
  var randomIndex = genNumRandom(0, 63, 15);

  //Avvio la generazione random delle Row della mia griglia, mentre però il numero delle caselle vado a cambiare parametri alla funzione interna
  // divGenerator()
  rowGenerator(8,"griglia", "row", 8);


  //Creo l'evento click per mostrare il quadratino coperto (JQuery)
  var square = $('.square');
  var hiddenHide = $('.hiddenHide');



  //Attraverso gli oggetti con la classe CSS .square con il selettore di JQuery, square = $('.square')
  for (var i = 0; i < square.length; i++) {

    //Controllo se il valore dell'indice è tra i miei numeri random
    if (randomIndex.includes(i)) {

      //Se lo è, aggiunge una classe con background red con metodo JS all'oggetto in questione e non a tutti gli oggetti
      square[i].classList.add("bg-red");


      console.log("oggetti ai quali aggiungo la classe bg-red ", square[i], " indice: ", i);
    }

  }

  //Variabile per contare i quadrati cliccati
  var greenCounter = 0;
  var redCounter = 0;
  var totCounter = 0;
  var controllo = true;


  //Evento del click sul quadrato
  square.click(function(){

    //Memorizzo l'elemento figlio di square (hiddenHide) in una variabile per richiamare la timing function solo sull'elemento dove è attiva la funzione
    var squareChildren = $(this).children();

    //Variabile che memorizza la proprietà css del quadrato dove clicchiamo
    var cssProprertyClick = $(this).css("background-color");

    console.log($(this).css("background-color"));



    squareChildren.hide(500);

    if (cssProprertyClick === "rgb(144, 238, 144)") {

      //Timing function di fine animazione per far riapparire lo sfondo bianco solo se il quadrato selezionato è verde
      setTimeout(function(){

      //Il Quadrato di chiude
      squareChildren.show(500);

      },2000);

      //allora incrementiamo il contatore dei verdi
      greenCounter++;


    }
    else if(cssProprertyClick === "rgb(255, 0, 0)"){
      //allora incrementiamo il contatore dei verdi
      redCounter++;

    }

    totCounter++;





    //Output in pagina dei counter
    document.getElementById('verdi').innerHTML = greenCounter;
    document.getElementById('rossi').innerHTML = redCounter;
    document.getElementById('totale').innerHTML = totCounter;



  });



  //Ritorna un array di oggetti con tutti i quadrati dell'html
  console.log(square);
  //Ritorno dell'array con i numeri randomici
  console.log("Array degli indici randomici ", randomIndex);



});

//---------------- FINE BLOCCO GENERATORE GRIGLIA ED OUTPUT DI BASE ----------------------//


//---------------- BLOCCO REGOLE, CONTEGGIO PUNTI E VINCITA O PERDITA --------------------//
