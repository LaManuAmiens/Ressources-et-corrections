function changeImage(image) {
  /*
  le parametre de ma fonction retourne l'url de l'image
  concaténé avec son ID auquel on modifie l'extension pour modifier le l'url
  et donc l'image
  */
   image.src = 'assets/img/' + image.id + '_2.jpg';
  }
// function changeImage() {
//   document.getElementById('image1').src = 'assets/img/image1_2.jpg';
//   document.getElementById('image2').src = 'assets/img/image2_2.jpg';
//   document.getElementById('image3').src = 'assets/img/image3_2.jpg';
//   document.getElementById('image4').src = 'assets/img/image4_2.jpg';
//   document.getElementById('image5').src = 'assets/img/image5_2.jpg';
// }
