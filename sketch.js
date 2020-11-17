var car,wall;
var weight,speed;
function setup() {
  createCanvas(2000,2000);
 // createSprite(400, 200, 50, 50);
  car=createSprite(700,200,20,20);
  wall=createSprite(1500,200,60,height/2);
  weight=random(140,250);
  speed=random(4,10);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(250,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
car.velocityX=speed;
}