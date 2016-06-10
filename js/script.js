$(document).ready(function(){
/*=======================================
Back End
========================================*/
//variables
var pingArray = [];
var pingString = "";

//function to create list up to number provided by user
function pingList(number) {
  pingArray = [];
  for(i = 1; i <= number; i++) {
    pingArray.push("<li>" + i.toString() + "</li>");
  }
  console.log(pingArray);

  pingString = pingArray.join("");
  console.log(pingString);
}








/*=======================================
Front End
========================================*/
  $("#ping-it").submit(function(event){
    event.preventDefault();
    pingArray = [];
    var input = parseInt($("#number").val());

    pingList(input);


    $("#ping-output").html(pingString);
  });
});
