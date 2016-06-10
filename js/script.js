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
  // console.log(numberArray);
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
  // console.log(numberArray);
}

//spec: create array of list elements and convert into a string
function pingThatString(array) {
  for(i = 0; i < array.length; i++) {
    // add contextual background styling based on content
    if(array[i] === "ping") {
      pingArray.push("<li class='list-group-item-success'>" + array[i] + "</li>");
    } else if(array[i] === "pong") {
      pingArray.push("<li class='list-group-item-info'>" + array[i] + "</li>");
    } else if(array[i] === "pingpong") {
      pingArray.push("<li class='list-group-item-danger'>" + array[i] + "</li>");
    } else {
      pingArray.push("<li>" + array[i] + "</li>");
    }
  }

  pingString = pingArray.join("");
}


/*=======================================
Front End
========================================*/
  $("#ping-it").submit(function(event){
    event.preventDefault();
    pingArray = [];
    var input = parseInt($("#number").val());
    console.log(input);

    //spec: validates that the input is a positive number and alert user if it isn't
    if(input <= 0) {
      $("#output p").text("Oh no! You are dangerously close to becoming imaginary.  Enter a positive integer.")
    }
    //spec: validates that the input is a number and alert user if it isn't
    if(isNaN(input)) {
      $("#output p").text("We're sure you mean well, but please enter numbers only!")
    }

    if(input >=200) {
      $("#output p").text("Well, I hope you like scrolling, kind fellow!")
    }

    createArray(input);
    ping(numberArray);
    pingThatString(numberArray);

    $("#ping-output").html(pingString);
    $("#ping-output li").addClass("list-group-item");

    $("#output").fadeIn("slow");
  });
});
