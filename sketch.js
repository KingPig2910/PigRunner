var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pig, pigImage;
var mudImage, mudGroup;
var ground;
var back, backImage;

var invisibleGround;
function preload(){
pigImage = loadImage("piglet.png");
mudImage = loadImage("mud.png");
backImage = loadImage("farm.jpg");
}

function setup() {
createCanvas(600,300);
//farm
back = createSprite(400,150,10,10);
back.addImage("back", backImage);
back.scale = 3;
back.velocityX = -3;
  
//pig
pig = createSprite(50,260,10,10);
pig.addImage("piglet", pigImage);
pig.scale = 0.15;
  
//mud
mudGroup = new Group();

//ground
ground = createSprite(300,300,900,10);
ground.visible = false;

}

function draw() {
background("lightgrey");
  pig.collide(ground);
  pig.velocityY = pig.velocityY + 0.8;
  if(gameState === PLAY){
    if(back.x < 190){
      back.x = 400;
    }
   if(keyDown("space")&& pig.y >= 250) {
        pig.velocityY = -12;
    }
spawnMud();
drawSprites(); 
  }
 if(mudGroup.isTouching(pig)){
   gameState = END;
   
 }
 if(gameState === END){
  textSize(30);
  stroke("yellow");
  strokeWeight(2);
  text("GameOver", 250,150);
 }
}
function spawnMud(){
  if(frameCount% 120 === 0){
    var mud = createSprite(600,280,20,20);
    mud.velocityX = -4;
    mud.addImage(mudImage);
    mud.scale = 0.15;
    mud.setLifetime = 100;
    
mudGroup.add(mud);
  }
}