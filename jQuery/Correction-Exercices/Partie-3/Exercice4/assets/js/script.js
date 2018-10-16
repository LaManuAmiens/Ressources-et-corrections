$(function(){
  initialColor = $('#rectangle').css('backgroundColor');
  //change la taille du rectangle
  $('#buttonSize').click(function(){
    if( $('#rectangle').height() < 100 ) {
      $('#rectangle').css('height', '+=10');
      // $('#rectangle').height()+10+"px");
    } else {
      $('#rectangle').css('height', '10px');
    }
  });
  //change la couleur du rectangle
  $('#buttonColor').click(function(){
    $('#rectangle').css('backgroundColor', 'green');
  });
  //remet la couleur initial du rectangle
  $('#buttonReset').click(function(){
    $('#rectangle').css('backgroundColor', initialColor);
  });
  //efface le rectangle
  $('#buttonDelete').click(function(){
    $('#rectangle').css('display', 'none');
  });
  //fait reaparaitre le rectangle
  $('#buttonComeBack').click(function(){
    $('#rectangle').css('display', 'block');
  });
});
