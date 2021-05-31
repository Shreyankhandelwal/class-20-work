var fixedRect
var Rect
var edges

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 250, 70, 30);
  fixedRect.shapeColor = "green";

  edges = createEdgeSprites();

  Rect = createSprite(700,200,30,70);
  Rect.shapeColor = "yellow"
}

function draw() {
  background("black");
  
  Rect.y = mouseY;
  Rect.x = mouseX

  console.log(Rect.x - fixedRect.x)

  if(Rect.x - fixedRect.x < Rect.width/2 + fixedRect.width/2 && 
    fixedRect.x - Rect.x <  Rect.width/2 + fixedRect.width/2 && 
    Rect.y - fixedRect.y < Rect.height/2 + fixedRect.height/2 && 
    fixedRect.y - Rect.y  < Rect.height/2 + fixedRect.height/2 ){

    Rect.shapeColor = "Lightblue";
    fixedRect.shapeColor = "red";

    fixedRect.VelocityY = 2;
    fixedRect.velocityX = -3;


  }
  else {
    fixedRect.shapeColor = "green";
    Rect.shapeColor = "yellow";
  }

  fixedRect.bounceOff(edges);
  drawSprites();
}