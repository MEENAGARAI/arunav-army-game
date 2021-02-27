var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var score = 0;
var army1score=0
var army2score=0
var distance=0;
var database;

var form, player, game;

var army1, army2, army;
var ground;
function preload(){
  army1Img=loadAnimation("Images/s2.png","Images/s4.png","Images/s5.png","Images/s6.png");
  army2Img=loadAnimation("Images/e1.png","Images/e2.png","Images/e3.png");
  bg1=loadImage("Images/background1.jpg");
  bg2=loadImage("Images/background2.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  }
