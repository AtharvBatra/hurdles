var canvas, roadImage;

var gameState = 0;
var playerCount;
var allPlayers;
var score = 0;
var database;

var form, player, game;

var player1, player2;


function setup() {
 canvas = createCanvas(displayWidth-20, displayHeight-30);
 database = firebase.database
}

function draw() {
  if(playerCount === 2){
  	game.update(1);
  }
  if(gameState === 1){
  	clear();
  	game.play();
  }
}