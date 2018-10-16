$(function(){
  $('.color').click(function(){
    divcolor = $(this).attr('id');
    $('#text').css('color', divcolor);
  })
})
