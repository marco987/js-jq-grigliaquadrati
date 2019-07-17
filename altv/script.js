// Creare una griglia formata da 8x8 quadratini
// tutti bianchi. 15 di questi quadratini
// (scelti a caso all’inizio) se cliccati
// diventano rossi, gli altri diventano verdi.

// *BONUS:*

// 1 - Sopra alla griglia deve esserci
// un contatore che conta quanti rossi
// e quanti verdi sono stati scoperti;

// 2 - generazione dinamica,  random,
// della griglia (anche qui potrei
// scomporre in 2 problemi, prima
// mi preoccupo di come generala da js
// e poi in caso, come rendere random
// la distribuzione dei rettangoli rossi).

$(document).ready(function(){

var contaRed = 0;
var contaGreen = 0;
var titolo = document.getElementById("contatore");

$("div").click(function() {
  if ($(this).hasClass("red")) {
    $(this).addClass("isRed");
    contaRed ++;
  } else {
    $(this).addClass("isGreen");
    contaGreen ++;
  }
  titolo.innerHTML="Hai beccato " + contaRed + " RED e " + contaGreen + " GREEN";
})


});
