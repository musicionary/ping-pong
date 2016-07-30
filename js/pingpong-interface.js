// Think of exports as a giant, global JavaScript object. We are creating a new property on it called calculatorModule, and we are setting this property equal to our Calculator constructor function. And because we used a prototype to attach our pingPong method, it gets dragged along as part of Calculator and stored in the new property of exports called calculatorModule.
//
// Now we just need to bring this calculatorModule into our receiving file, js/pingpong-interface.js.

// Also, don't worry too much yet about why we are using the ./../ at the beginning of our file path above. To summarize, this is because soon we will have a new folder in our structure, which will hold a version of our interface file. This file will need to know how to find our back-end pingpong.js file. Just like when we use the cd command in the terminal, we need to specify the path using ./ to say "start in the current folder", then .. means to go up one level. This takes us to the top of our project folder. Then we say /js/pingpong.js because we need to look inside of the js folder to find pingpong.js.

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
