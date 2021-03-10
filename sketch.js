const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
var engine , world;
var phone;
var ball;
function setup() {
 var canvas =  createCanvas(400,400);
  engine = Engine.create();
world = engine.world;
var phone_options = { isStatic : true}
phone = Bodies.rectangle(200,390,200,20,phone_options);
World.add(world,phone);
console.log(phone.type);
var ball_options = {restitution:1.0};
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);


}

function draw() {
  background(0); 
  rectMode(CENTER);
  rect(phone.position.x,phone.position.y,400,20);
  Engine.update(engine);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}