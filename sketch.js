var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 5;
  movingRect = createSprite(700, 200, 32, 90);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -5;
}



function draw() {
  background(255,255,255);
  
  bounceOff(movingRect, fixedRect); 

  drawSprites();
}

function bounceOff(object1, object2) {
  
  if(object1.x - object2.x < object1.width / 2 + object2.width / 2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX*-1;
      object2.velocityX = object2.velocityX*-1;
    }

  if (object1.y - object2.y < object1.height / 2 + object2.height / 2 &&
    object2.y - object1.y < object1.height / 2 + object2.height / 2) {
      object1.velocityY = object1.velocityY*-1;
      object2.velocityY = object2.velocityY*-1;
    }

}