const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird;
var pig1;
var log1;
function setup(){
    var canvas = createCanvas(1280,720);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,700,50,50);
    box2 = new Box(1000,700,50,50);
    box3 = new Box(800,600,50,50);
    box4 = new Box(1000,600,50,50);
    box5 = new Box(900,500,50,50);
    ground = new Ground(640,height,1280,20);
    bird = new Bird(10,10);
    pig1= new Pig(900,700);
    pig2= new Pig(900,600);
    log1 = new Log(900,650,300,PI/2);
    log2 = new Log(900,550,300,PI/2);
    log3 = new Log(850,500,80,PI/7);
    log4 = new Log(950,500,80,-PI/7);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display ();
    
}