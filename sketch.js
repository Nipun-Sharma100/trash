var ball,box,bin1,bin2,bin3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

 
	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    paper = new Paper(100,120,20) 
    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
    bin1=createSprite(650,650,200,30)
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  
  
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-70})
	 }
   }


