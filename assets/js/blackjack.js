var blackCards = [];
var redCards = [];

var total;

var stageInt = 0;

function newGame(){
  
  total = 0;
  
  blackCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10];
  redCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10];
  
  
  hitMe();
  hitMe();
  
  
  $("#playButton").text("HIT ME!");
  stageInt = 1;
  
}


function hitMe(){
  
  var deck = Math.floor(Math.random() * 2);
  
  if(deck == 1 && blackCards.length > 0){
    var value = blackCards[Math.floor(Math.random()*blackCards.length)];
  }
  else if(redCards.length > 0){
    var value = redCards[Math.floor(Math.random()*redCards.length)];
  }
  
  total += value;
  console.log(total);
  
  
  if(total == 21){
    gameOver(true);
  }
  if(total > 21){
    gameOver(false);
  }
  
  
}


function gameOver(win){
  console.log("GAME OVER MAN GAME OVER!");
  if(win){
    console.log("YOU WIN")
  }
  else{
    console.log("YOU LOST");
  }
  stageInt = 0;
  $("#playButton").text("Play Again?");
  
  
}


function stage(){
  if(stageInt == 0){
    newGame();
  }
  else if(stageInt == 1){
    hitMe();
  }
}

//$(document).ready(newGame());