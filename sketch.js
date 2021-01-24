
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;



function setup() {
	createCanvas(1500, 550);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(1200,550);
hammer=new Hammer(100,100)
iron1=new Iron(100,100)
rubber=new Rubber(1000,250)
stone=new Stone(600,200)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);
  ground.display();
  hammer.display();
  iron1.display();
  rubber.display();
  stone.display();
  
  
  drawSprites();
 
}



