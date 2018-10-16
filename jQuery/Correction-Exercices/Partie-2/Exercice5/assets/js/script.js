// $(function(){
//   $("#firstName").focus(function(){
//     $("#firstName").css("border", "3px solid green")
//   });
//   $("#lastName").focus(function(){
//     $("#lastName").css("border", "3px solid green")
//   });
//   $("#firstName").blur(function(){
//     $("#firstName").css("border", "3px solid red")
//   });
//   $("#lastName").blur(function(){
//     $("#lastName").css("border", "3px solid red")
//   });
// });

$(function(){
  $("input").focus(function() {
    $(this).css("border", "3px solid green");
  });
  $("input").blur(function() {
    $(this).css("border", "3px solid red");
  });
});
