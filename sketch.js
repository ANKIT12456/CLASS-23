const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,box1,box2;

function setup(){
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground()
  box1=new Box(200,100,35,35)
  box2=new Box(210,200,30,50)


 /* var ground_option={
    isStatic: true
  }
  ground=Bodies.rectangle(200,380,400,20,ground_option);
  World.add(world,ground);*/

  /*var ball_option={
    isStatic:false,
    restitution : 0.5
  }
  ball=Bodies.circle(200,100,12,ball_option);
  World.add(world,ball);*/


}

function draw(){
  background("black");
  Engine.update(engine);
  ground.display();
  box1.show();
  box2.show();

  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);*/
  /*ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,12,12);*/
  
}