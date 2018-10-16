$(function(){
  var valeur = Math.floor(Math.random()*100)+1;
  var compteur = 0;
  $("#valider").click(function(){
    compteur++;
    var good = $("#bonChiffre").val();
    if (isNaN(good) == false) {
      if (valeur > good) {
        alert("C'est plus !");
      } else if (valeur < good) {
        alert("C'est moins !");
      } else {
        alert("Bravo ! Tu as trouvé le bon chiffre en " + compteur + " fois");
      }
    } else {
      alert("Donne un nombre !");
    }
  });
});
