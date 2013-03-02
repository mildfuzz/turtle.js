var turtle = new Turtle();
turtle.draw();

document.getElementById("turtle_button").onclick = function () {
  turtle = new Turtle();
  var instructions = document.getElementById("instructions").value.split("\n");
  for(var i = 0; i < instructions.length; i++){
    console.log(i);
    var command = instructions[i].split(" ");
    switch(command[0].toLowerCase()){
      case "move": turtle.walk(command[1]);break;
      case "turn": turtle.turn(~~command[1]);break;
      case "jump": turtle.jump(~~command[1], ~~command[2]);break;
      case "curve": turtle.curve(~~command[1], ~~command[2],~~command[3],~~command[4],~~command[5]);break;
      default: console.log("Not a command");
    }
  }
  turtle.draw();
};
