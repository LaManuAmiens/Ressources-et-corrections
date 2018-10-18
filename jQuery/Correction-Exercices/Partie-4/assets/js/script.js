$(function() {
  var computer = "";
  var playerScore = 0;
  var zero = 0;
  var computerScore = 0;
  var result = $("#result");

	$("#compare").click(function() {
    // randomNumber génère un nombre entre 1 et 3 de facon aléatoire
    // selon le nombre généré une valeur est associée à la variable computer
    var randomNumber = Math.floor(Math.random()*3 + 1);
    if (randomNumber == 1) {
			computer = "pierre";
		} else if (randomNumber == 2) {
			computer = "feuille";
		} else {
			computer = "ciseaux";
		}
    // on récuprère la valeur choisie par le joueur
    // puis on compare avec celle de l'ordinateur
    var player = $("#player").val();
    if ((computer == "pierre" && player == "ciseaux") || (computer == "feuille" && player == "pierre") || (computer == "ciseaux" && player == "feuille")) {
			result = "tu as perdu !";
			computerScore++;
		} else if (computer == player) {
			result = "match nul !";
      zero++;
		} else {
			result = "tu as gagné !";
			playerScore++;
		}
    // on fait un pourcentage des victoires
    var percentVictory = Math.round(((playerScore / (computerScore + playerScore)) * 100) * 100) / 100;
    // on affiche ensuite toutes les valeurs sur la page
		$("#victory").text("Victoires : " + playerScore);
    $("#null").text("Nul : " + zero);
		$("#losses").text("Défaites : " + computerScore);
    $("#percentVictory").text("Pourcentage de victoire contre l'ordinateur : " + percentVictory + "%");
		$("#result").text("L'ordinateur a joué " + computer + ", " + result);
	});
});
