// Creare una griglia formata da 8x8 quadratini
// tutti bianchi. 15 di questi quadratini
// (scelti a caso all’inizio) se cliccati
// diventano rossi, gli altri diventano verdi.

$(document).ready(function(){

$("div").click(function() {
  if ($(this).hasClass("red")) {
    $(this).addClass("isRed");
  } else {
    $(this).addClass("isGreen");
  }
})

});
