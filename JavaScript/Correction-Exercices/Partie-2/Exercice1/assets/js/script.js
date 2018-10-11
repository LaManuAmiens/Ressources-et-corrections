function changeImage(img){
/*
lors de l'appel de la fonction,
on pourra lui passer notre seconde image en paramètre(ou argument)
*/
  document.getElementById('image').src = img;
/*
A l'appel de la fonction changeImage(img)
dans le document <html> et sur l'élément portant l'ID "image"
la propriété .src retourne une image (ou plutôt son URL)
que l'on passe en argument à notre fonction lors de son appel
*/
}
