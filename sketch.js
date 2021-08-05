var jaxon, jaxon_runner, jaxon_collided
var path, pathImage

function preload(){

  //pre-load images;

  pathImage = loadImage("path.png");

  jaxon_runner = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){

  createCanvas(400,400)

  //create sprites here;

  path=createSprite(200,200,20,20)
  path.addImage(pathImage)
  path.velocityY = 5
  path.scale = 1.5  

  jaxon = createSprite(130,290,10,10)  
  jaxon.addAnimation("running",jaxon_runner)
  jaxon.scale = 0.1

}

function draw() {

  background("white");
  
 
   jaxon.x = World.mouseX;
  


 //code to make backgrond infenite 
  if (path.y < 400){  
    path.y=path.width/2;
  }
  
  drawSprites();
}
