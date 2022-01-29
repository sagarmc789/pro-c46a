var bg,bg2,bg3,form,system,code,security;
var score=0;
var gun,gunImg
var hit=0
var gameState=1
var target1,target1Img,target2,target2Img,target3,target3Img,target4,target4Img
var bulletGroup;
var target1Group,target2Group,target3Group,target4Group;

function preload() {
  bg = loadImage("school.jpeg");
  bg2 = loadImage("blackbg.jpeg")
  gunImg=loadImage("tommy.png")
  target1Img=loadImage("target.png")
  target2Img=loadImage("target.png")
  target3Img=loadImage("target.png")
  target4Img=loadImage("target.png")
bulletImg=loadImage("bullet.png")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  background("white")

bulletGroup=new Group()
target1Group=new Group()
target2Group=new Group()
target3Group=new Group()
target4Group=new Group()
}

function draw() {
  //background("white");
  
  if(gameState===1){
background(bg)
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

if(score===3){
  clear()
  gameState=2
}


  }


  if(gameState===2) {
   
  bg3=createSprite(0,100,1000,1000)
    bg3.addImage(bg2)
    
      
       console.log("YOU HAVE BEEN SELECTED TO THE ARMY!HIT THE TARGETS TO FINISH YOUR TRAINING(PRESS SPACE TO SHOOT)",100, 50);
    
gun=createSprite(100,450,50,50)
gun.addImage("shoot",gunImg)
gun.scale=0.17
    gun.x=World.mouseX

target1=createSprite(200,100,50,50)
target1.addImage(target1Img)
target1.scale=0.03
target1Group.add(target1);

target2=createSprite(400,100,50,50)
target2.addImage(target2Img)
target2.scale=0.03
target2Group.add(target2);

target3=createSprite(600,100,50,50)
target3.addImage(target3Img)
target3.scale=0.03
target3Group.add(target3);

target4=createSprite(800,100,50,50)
target4.addImage(target4Img)
target4.scale=0.03
target4Group.add(target4);

if(keyDown("space"))
       {
        createBullet();
      }


      if(bulletGroup.isTouching(target1Group)){
        target1Group.destroyEach()
        bulletGroup.destroyEach();
        hit=hit+3
      }

      if(bulletGroup.isTouching(target2Group)){
        target2Group.destroyEach()
        bulletGroup.destroyEach();
        hit=hit+3
      }

      if(bulletGroup.isTouching(target3Group)){
        target3Group.destroyEach()
        bulletGroup.destroyEach();
        hit=hit+3
      }

      if(bulletGroup.isTouching(target4Group)){
        target4Group.destroyEach()
        bulletGroup.destroyEach();
        hit=hit+3
      }
  }
  
  drawSprites()

function createBullet()
        {
          var bullet=createSprite(480,430,5,5)
          bullet.addImage(bulletImg)
          bullet.velocityY=-15
          bullet.scale=0.01
          bullet.lifetime=30
          bullet.x=gun.x
          bulletGroup.add(bullet);
        }
}