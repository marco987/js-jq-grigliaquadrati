// Creare una griglia formata da 8x8 quadratini
// tutti bianchi. 15 di questi quadratini
// (scelti a caso all’inizio) se cliccati
// diventano rossi, gli altri diventano verdi.

// $(".red").click(function() {
//   $(this).css("background-color", "red");
// })

$(".quad").click(function() {
  if ($("div").hasClass("red")) {
    $(this).css("background-color", "red");
  } else {
    $(this).css("background-color", "green")
  }
})

console.log($("div").attr("class") == "quad red");

console.log($("div").hasClass("red"));

console.log($("div").attr("class"));
