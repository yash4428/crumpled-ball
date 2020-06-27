var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,height,1200,20)
	ball = new Ball(400,300,100)



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();

  
  drawSprites();
 
}



