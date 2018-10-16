$(function(){
  $("#ajouter").click(function(){
    var valeur = $("#nombreClick").val();
    valeur++;
    $("#nombreClick").val(valeur);
  });
  $("#retirer").click(function(){
    var valeur = $("#nombreClick").val();
    valeur--;
    $("#nombreClick").val(valeur);
  });
});
