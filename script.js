// Creare una griglia formata da 8x8 quadratini
// tutti bianchi. 15 di questi quadratini
// (scelti a caso all’inizio) se cliccati
// diventano rossi, gli altri diventano verdi.

$(document).ready(function(){

$(".quad").click(function() {
  if ($("div").hasClass("red")) {
    $(this).addClass("isRed");
  } else {
    $(this).addClass("isGreen");
  }
})

});
