const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var woman,womanImage;
var edges;
var bg,bgImage;

function preload()
{
  bgImage = loadImage("background.jpg");
  womanImage = loadImage("woman1.png");
}

function setup()
 {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth-500,displayHeight*2);
  bg.addImage(bgImage);
  bg.scale = 2.5;
  bg.velocityY = -3;
  //woman
  woman = createSprite(displayWidth/2,displayWidth/2,20,20);
  woman.addImage(womanImage);
  woman.scale = 0.5;

  engine = Engine.create();
	world = engine.world;
  edges = createEdgeSprites();     


  

Engine.run(engine);
}

function draw()
 {
  


  background(0); 

if(keyDown("UP_ARROW"))
{
  woman.y = woman.y-2;
}


if(keyDown("LEFT_ARROW"))
{
  woman.x= woman.x-2;
}

if(keyDown("RIGHT_ARROW"))
{
  woman.x = woman.x+2;
}
woman.collide(edges);
  drawSprites();


}


  

 



