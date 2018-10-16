// $(function(){
//   $("#green").mouseover(function(){
//     $("#text").css("color", "green")
//   });
//   $("#green").mouseout(function(){
//     $("#text").css("color", "black")
//   });
//   $("#red").mouseover(function(){
//     $("#text").css("color", "red")
//   });
//   $("#red").mouseout(function(){
//     $("#text").css("color", "black")
//   });
//   $("#blue").mouseover(function(){
//     $("#text").css("color", "blue")
//   });
//   $("#blue").mouseout(function(){
//     $("#text").css("color", "black")
//   });
// });

$(function(){
  $(".color").mouseover(function() {
    divColor = $(this).attr("id");
    $("#text").css("color", divColor);
  });
  $(".color").mouseleave(function() {
    $("#text").css("color", "black");
  });
});
