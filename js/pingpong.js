function Calculator(skinName) {
  this.model = skinName;
}

Calculator.prototype = function pingPong(goal) {
  var output = [];
  for(i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else {
      output.push(i);
    }
  }
  return output;
}

//our constructor function and our pingPong method have now become part of a module. A module is a group of JavaScript functions and data that comprises some sort of functionality.
exports.calculatorModule = Calculator;
