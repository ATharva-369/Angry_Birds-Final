const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var gameState = "onSling";
var bg;
var score = 0;
var refresh;
var r;
function preload() {
  getBackground();

}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600, height, 1200, 20)

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810, 260, 300, PI / 2);

  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  pig3 = new Pig(810, 220);

  log3 = new Log(810, 180, 300, PI / 2);

  box5 = new Box(810, 160, 70, 70);
  log4 = new Log(760, 120, 150, PI / 7);
  log5 = new Log(870, 120, 150, -PI / 7);

  bird = new Bird(100, 100);
  platform = new Ground(150, 330, 275, 120);

  sling = new Slingshot(bird.body, { x: 120, y: 100 });
  refresh = createButton("REFRESH");
}

function draw() {
  if (backgroundImg !== undefined) {
    background(backgroundImg);
  }
  Engine.update(engine);
  // console.log(box2.body.position.x);
  // console.log(box2.body.position.y);
  // console.log(box2.body.angle);
  textSize(30);
  fill("white");
  text("SCORE: " + score, 1000, 100);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig3.display();
  log3.display();

  box5.display();
  log4.display();
  log5.display();

  bird.display();
  platform.display();

  sling.display();
  pig1.score();
  pig3.score();
  refresh.position(50, 20);
  refresh.mouseClicked(() => {
    replay();
  })


  // drawSprites();

}
function replay() {

  gameState = "onSling";
  sling.attach(bird.body);
  Matter.body.setPosition(bird.body, { x: 200, y: 250 });


}
function mouseDragged() {
  if (gameState === "onSling") {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
  }
}
function mouseReleased() {
  sling.fly();
  gameState = "launched"
}
/*function keyPressed() {
  if (keyCode === 32) {
    gameState = "onSling";
    sling.attach(bird.body);
    Matter.body.setPosition(bird.body, { x: 200, y: 250 });
  }
}*/


async function getBackground() {
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var responseJson = await response.json();
  var dt = responseJson.datetime;
  var hour = dt.slice(11, 13);
  // console.log(hour);
  if (hour >= 06 && hour <= 18) {
    bg = "sprites/bg.png"
    // fill("black")

  }
  else {
    bg = "sprites/bg2.jpg"
    // fill("white");
  }
  backgroundImg = loadImage(bg);

}

