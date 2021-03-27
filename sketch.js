var rect1 ;
var rect2 ;
var rect3 ;
var rect4 ;

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(200, 100, 100, 50);

 rect2 =  createSprite(400, 50, 100, 50);
 rect2.shapeColor = "black";

 rect4 = createSprite(200, 200, 100, 50);

 rect3 = createSprite(100, 50, 100, 50);
}

function draw() {
  background("green"); 
  
  rect2.y = mouseY;
  rect2.x = mouseX;

 
if (algorithms(rect2 , rect3 )){

  rect3.shapeColor = "yellow";
  rect2.shapeColor = "yellow";
}
else {

  rect2.shapeColor = "white";
  rect3.shapeColor = "white";
}

//if (algorithms(rect2 , rect1 )){

//  rect1.shapeColor = "blue";
 // rect2.shapeColor = "blue";
//}
//else {

 // rect2.shapeColor = "white";
 // rect1.shapeColor = "white";
//}

  drawSprites();
}

