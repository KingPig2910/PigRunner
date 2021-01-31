var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pig, pigImage;
var mudImage, mudGroup;
var ground;
var back, backImage;

var invisibleGround;
function preload(){
pigImage = loadImage("brown monpig.png");
mudImage = loadImage("mud.png");
backImage = loadImage("farm.jpg");
}

function setup() {
createCanvas(1200,600);
//farm
back = createSprite(800,300,10,10);
back.addImage("back", backImage);
back.scale = 6;
back.velocityX = -6;
  
//pig
pig = createSprite(100,520,10,10);
pig.addImage("monpig", pigImage);
pig.scale = 0.30;
  
//mud
mudGroup = new Group();

//ground
ground = createSprite(600,600,1800,10);
ground.visible = false;

}

function draw() {
background("lightgrey");
  pig.collide(ground);
  pig.velocityY = pig.velocityY + 0.8;
  if(gameState === PLAY){
    if(back.x < 380){
      back.x = 800;
    }
   if(keyDown("space")&& pig.y >= 500) {
        pig.velocityY = -24;
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
  text("GameOver", 500,300);
 }
}
function spawnMud(){
  if(frameCount% 120 === 0){
    var mud = createSprite(1200,560,20,20);
    mud.velocityX = -8;
    mud.addImage(mudImage);
    mud.scale = 0.30;
    mud.setLifetime = 100;
    
mudGroup.add(mud);
  }
}
