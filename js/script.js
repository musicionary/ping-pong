$(document).ready(function(){
/*=======================================
Back End
========================================*/
//variables
var numberArray = [];
var pingArray = [];
var pingString = "";


//spec: create list of numbers up to the number provided by user
function createArray(number) {
  numberArray = [];
  for(i = 1; i <= number; i++) {
    numberArray.push(i);
  }
  console.log(numberArray);
}

function ping(array) {
  for(j = 0; j < array.length; j++){
    //spec: replace numbers divisible by 15 with the word pingpong
    if(array[j] % 15 === 0) {
      array[j] = "pingpong";

    //spec: replace numbers divisible by 5 with the word pong
  }else if(array[j] % 5 === 0){
      array[j] = "pong";

    //spec: replace numbers divisible by 3 with the word ping
  }else if(array[j] % 3 === 0) {
      array[j] = "ping";
    }
  }
  console.log(numberArray);
}

//spec: create array of list elements and convert into a string
function pingThatString(array) {
  for(i = 0; i < array.length; i++) {
    pingArray.push("<li>" + array[i] + "</li>");
  }
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

    createArray(input);
    ping(numberArray);
    pingThatString(numberArray);

    $("#ping-output").html(pingString);
  });
});
