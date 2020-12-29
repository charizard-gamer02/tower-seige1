const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";
var ground1,ground2,slingShot,engine,world,polyimg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box15,box16,poly;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
    world = engine.world;
   ground1=new Ground(400,650,400,20)
   //ground2=new Ground(900,300,400,20)
box1=new Box(450,550,50,100)
box2=new Box(475,550,100,100)
box3=new Box(500,550,100,100)
box4=new Box(525,550,100,100)
box5=new Box(550,550,100,100)
box6=new Box(475,400,100,100) 
box7=new Box(500,400,100,100)
box8=new Box(525,400,100,100)
box9=new Box(500,500,100,100)
box11=new Box(950,300,100,100)
box10=new Box(900,300,100,100)
box12=new Box(1000,300,100,100)
box13=new Box(1150,300,100,100)
box14=new Box(950,250,100,100)
box15=new Box(1000,250,100,100)
box16=new Box(975,100,100,100)
poly=new Poly(100,350,100)
slingShot=new SlingShot(poly.body,{x:100,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey")
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  poly.display();
  slingShot.display();
  
  
  
 
  
  
  
  
  




  drawSprites();
 
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32&&gameState==="launched"){
     Matter.Body.setPosition(poly.body, {x: 100 , y: 350});

     slingShot.attach(poly.body);
    
     gameState="onSling"
  }
}
