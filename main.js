
let ebtn = document.querySelector("#easy");
let mbtn = document.querySelector("#medium");
let hbtn = document.querySelector("#hard");

let btns = [ebtn, mbtn, hbtn];

for (i = 0; i < btns.length; i++) {

    if (i == 0) {
        btns[i].style ["background-color"] = [`${easy.color}`];
        
    } else if (i == 1) {
        btns[i].style ["background-color"] = [`${medium.color}`];
    } else {
        btns[i].style ["background-color"] = [`${hard.color}`];
    }

}
let r = 255;
let g = 255;
let b = 255;
var ballX;
var ballY;
let ballSpeedX = 0;
let ballSpeedY = 0;
var paddleHeight = 40;
var length = 200;
var backgroundColor = 128;
let points = 0;
let health = 0;
let pointInc = 0;

function changeVarE() {
    console.log("I detected easy");
    ballX = 0;
    ballY = 0;
    health = 0;
    health = easy.health;
    points = 0;
    pointInc = easy.points;
    ballSpeedX = easy.speed;
    ballSpeedY = easy.speed;
} 

function changeVarM() {
    console.log("I detected easy");
    ballX = 0;
    ballY = 0;
    health = 0;
    health = medium.health;
    points = 0;
    pointInc = medium.points;
    ballSpeedX = medium.speed;
    ballSpeedY = medium.speed;
} 

function changeVarH() {
    console.log("I detected easy");
    ballX = 0;
    ballY = 0;
    health = 0;
    health = hard.health;
    points = 0
    pointInc = hard.points;
    ballSpeedX = hard.speed;
    ballSpeedY = hard.speed;
} 

ebtn.addEventListener("click", changeVarE);
mbtn.addEventListener("click", changeVarM);
hbtn.addEventListener("click", changeVarH);
function setup() {

  createCanvas(600,600);
  noCursor();
  ballX = random(width)
  ballY = random(height / 2);
  
}
function draw() {
  //frameRate(1)
   background(backgroundColor);
   fill(255, 255, 255);
   textSize(22);
   text("Score: " + points, 30, 30);
   text("Health: " + health, 30, 50);

  strokeWeight(4);
  stroke(255);
  fill(255);
  rect(mouseX, height - paddleHeight - 4, length, paddleHeight);// Paddle height
  noStroke();
  fill(r,g,b);
  ellipse(ballX, ballY, 20, 20);
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;
  if (ballX < 0 || ballX > width) {
    ballSpeedX = ballSpeedX * -1;
  }
  if (ballY < 0) {
    ballSpeedY = ballSpeedY * -1;
  }
  if (ballY > height - paddleHeight){ // ball is past goal line vertically
    if (ballX > mouseX && ballX < mouseX+length) { // ball is within paddle horizontally
      ballSpeedY = ballSpeedY * -1;
      length -= 25;
      r = random(0,256);
      g = random(0,256);
      b = random(0,256);
      points += pointInc
    }
    else {
        health -= 1;
        ballX = 0;
        ballY = 0;
        
        if (health === 0) {  
            background(255,0,0);
            fill(0);
            text("GAME OVER!", width / 2, height / 2);
            noLoop();
        }
    }
  }
  if(length <= 0){ // if the paddle length is 0 then a you win screen will appear
    background(0,255,0)
    fill(0);
    text("YOU WIN!", width / 2, height / 2);
    noLoop();
  }
}