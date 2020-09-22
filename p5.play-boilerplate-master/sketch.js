
var movingrect,fixedrect



function setup() {
  createCanvas(800,400);

fixedrect=createSprite(400,60,50,50)
movingrect=createSprite(400, 200, 50, 50);
movingrect.shapeColor= "green"
fixedrect.shapeColor = "green"
movingrect.velocityY = -3

}


function draw() {
  background(255,255,255);  
 
 
 if (movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 ){
 movingrect.velocityY = movingrect.velocityY*-1
 }
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2  ){
 
 
 movingrect.shapeColor= "red"
fixedrect.shapeColor = "red"
 
 
 }
 else{
  movingrect.shapeColor= "green"
  fixedrect.shapeColor = "green"
   
 }
 
 
  drawSprites();









}