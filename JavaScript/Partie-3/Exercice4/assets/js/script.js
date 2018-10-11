function verifPassword() {

  if (document.getElementById("password").value != (document.getElementById("confirmPassword").value)) {
    document.getElementById("password").style.border = "red 3px solid";
    document.getElementById("confirmPassword").style.border = "red 3px solid";
    alert("veuillez confirmer votre mot de passe");
  }else if((document.getElementById("password").value == false) || (document.getElementById("confirmPassword").value == false)){
    alert('Veuillez saisir un mot de passe et le confirmer');
  }
  else {
    document.getElementById("password").style.border = "green 3px solid";
    document.getElementById("confirmPassword").style.border = "green 3px solid";
    alert("mot de passe validé");
  }
}
