var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var boys;
var boyDuck;
var form, player;
var boyImage1;
var boy1,boy2;
var birdImage;
var elephantImage;
var kong1,kong2;
var backgroundImg;
var kongs;
var kongImage;
var rock,rockImg;
var boystill;
var kongstill;
function preload(){
 boyImage1=loadAnimation("image/man11.png","image/man22.png","image/man33.png","image/man44.png","image/man55.png")
 //boyImage2=loadAnimation("image/man11.png","image/man22.png","image/man33.png","image/man44.png","image/man55.png")
 boystill=loadImage("image/boy.png")
 kongstill=loadImage("image/kong1.png")
 elephantImage=loadImage("image/elephant.png");
 backgroundImg=loadImage("image/back.png")
 rockImg=loadImage("image/rock.png")
 kongImage=loadAnimation("image/kong1.png","image/kong2.png","image/kong3.png","image/kong4.png","image/kong5.png")
 boyDuck=loadImage("image/boyduck.png")
}

function setup(){
  canvas = createCanvas(windowWidth-20, windowHeight-30);
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
  if(gameState === 2){
    game.end();
  }
}
