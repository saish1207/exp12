 var bullet , wall,thickness  ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(50, 200, 50, 50);

  speed = random (1,10) ;
  weight = random (400,1500) ;
  thickness = random (22,83);

  bullet.velocityX = speed ;
}

function draw() {
  background(255,255,255); 
  
if(isTouching()){
  var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor = "green";
  }

  if(damage<10){
    wall.shapeColor = "red";
  }

}


bounceoff();

  drawSprites();
}
function isTouching () {
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX = 0 ;
    return true ;
  }
  return false ;
}

function bounceoff() {
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX = -10 ;
}

if(bullet.x-wall.x<bullet.width/2+wall.width/2){
  bullet.velocityX = -10 ;
}

if(bullet.y-wall.y<bullet.height/2+wall.height/2){
  bullet.velocityX = -10 ;
}

if(wall.y-bullet.y<wall.height/2+bullet.height/2){
  bullet.velocityX = -10 ;
}

}

  
