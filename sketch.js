
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    
    var ball_options = {restitution: 1};
    ball = Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

    var ground_options ={ isStatic: true };
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground)
    
    var border1_options = { isStatic: true };
    border1 = Bodies.rectangle(650, 375, 50, 10, border1_options);
    World.add(world,border1);
   
        
    var border2_options = { isStatic: true };
    border2 = Bodies.rectangle(590, 352, 10, 50, border2_options);
    World.add(world,border2);
   
        
    var border3_options = { isStatic: true };
    border3 = Bodies.rectangle(710, 352, 50, 10, border3_options);
    World.add(world,border3);
   


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background("black");

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1600,20);
  
  rectMode(CENTER);
  rect(border1.position.x,border1.position.y, 120, 10);
  
  rectMode(CENTER);
  rect(border2.position.x,border2.position.y, 10, 60);
  
  rectMode(CENTER);
  rect(border3.position.x,border3.position.y, 10, 60);

  if(keyDown("space")){
      ball_options.x = 650;
  }
  

  drawSprites();
 
}



