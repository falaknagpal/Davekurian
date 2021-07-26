var canvas;
var dave;
var ground,edge1,edge2,edge3;
var plat1,plat2,plat3,plat4;
var plat5,plat6,plat7,plat8;
var score=0;
function preload(){
  daveI= loadAnimation("Images/ds.png");
  daver=loadAnimation("Images/dr.png")
  davel=loadAnimation("Images/dl.png")
  davesl=loadAnimation("Images/dsl.png")
  brick_1= loadImage("Images/brick_1.png");
  brick_2= loadImage("Images/brick.png");
  groundI=  loadImage("Images/g2.png");
  diamondI= loadImage("Images/diamond_1.png")
  tr= loadImage("Images/trophy.png")
  doorup=loadImage("Images/doorup.png")
  doorl=loadImage("Images/doorside.png")
  doorI=loadImage("Images/door_1.png")
}


function setup(){
  canvas=createCanvas(800,300)


  ground=createSprite(500,300,2000,10)
  ground.addImage(groundI)
  ground.scale=1
 // ground.debug=true;
  ground.setCollider("rectangle",0,0,1000,20)
    
  dave = createSprite(50,250,70,70);
  dave.addAnimation("normal",daveI)
  dave.addAnimation("right",daver)
  dave.addAnimation("left",davel)
  dave.addAnimation("standleft",davesl)
  dave.scale=0.8
  dave.debug=true;
  dave.setCollider("rectangle",0,0,50,50)
 
  
  plat1= createSprite(200,240,50,25);
  plat1.addImage(brick_1)
  plat1.scale=0.7
  plat2= createSprite(300,170,30,25);
  plat2.addImage(brick_1)
  plat2.scale=0.7
  plat3= createSprite(130,140,30,25);
  plat3.addImage(brick_1)
  plat3.scale=0.7
  plat4= createSprite(10,100,30,30);
  plat5= createSprite(35,210,30,30);
  plat5.scale=0.7
  plat5.addImage(brick_1);
  plat6=createSprite(440,215,30,30);
  plat6.addImage(brick_1);
  plat6.scale=0.7;
  plat7=createSprite(515,140,30,25);
  plat7.addImage(brick_1);
  plat7.debug=true;
  plat7.scale=0.7;
  plat8=createSprite(615,215,30,30);
  plat8.addImage(doorup);
  plat8.scale=0.5; 
  plat9= createSprite(540,245,30,30);
  plat9.addImage(doorl);
  plat9.scale=0.5;
  plat10= createSprite(540,275,30,30);
  plat10.addImage(doorl);
  plat10.scale=0.5;

d1=createSprite(37,180,10,10)
d1.addImage(diamondI)
d1.scale=0.6

d2=createSprite(196,215,10,10)
d2.addImage(diamondI)
d2.scale=0.6

d3=createSprite(135,110,10,10)
d3.addImage(diamondI)
d3.scale=0.6

d4=createSprite(300,140,10,10)
d4.addImage(diamondI)
d4.scale=0.6

d5=createSprite(445,180,10,10)
d5.addImage(diamondI)
d5.scale=0.6

prize=createSprite(510,100,10,10)
prize.addImage(tr)
prize.scale=0.7

door=createSprite(568,260,10,10)
door.addImage(doorI)
}



function draw(){
  background("grey");
  fill("black")
  textSize(20)
  text("SCORE: "+score,40,45)
 if(keyDown(UP_ARROW)){
  dave.y=dave.y-20;
 }

 dave.velocityY=dave.velocityY+2
 
 if(keyWentDown(RIGHT_ARROW)){
    dave.x=dave.x+10;
    dave.changeAnimation("right",daver)
  }
  
 if(keyWentUp(RIGHT_ARROW)){
 dave.x=dave.x+10;
  dave.changeAnimation("normal",daveI)
}
 if(keyWentDown(LEFT_ARROW)){
    dave.x=dave.x-10;
    dave.changeAnimation("left",davel)
 }
 if(keyWentUp(LEFT_ARROW)){
  dave.x=dave.x-10;
  dave.changeAnimation("standleft",davesl)
}
if(keyDown(UP_ARROW)&&keyDown(RIGHT_ARROW)){
  dave.y=dave.y-20;
  dave.x=dave.x+10;
  dave.changeAnimation("right",daver)
 }
 if(keyDown(UP_ARROW)&&keyDown(LEFT_ARROW)){
  dave.y=dave.y-20;
  dave.x=dave.x-10;
  dave.changeAnimation("Lleft",davel)
 }
 /*for(var i=0;i<=300;i=i+50){
  edge1= createSprite(10,i,1,2000);
  edge1.addImage(brick_2)}

  for(var i=0;i<=300;i=i+50){
    edge2=createSprite(985,i,1,1000);
    edge2.addImage(brick_2)}

    for(var i=0;i<=1000;i=i+50){
      edge3=createSprite(i,0,1000,25)
      edge3.addImage(brick_1)
    }*/

  if(dave.isTouching(plat1)){
    dave.collide(plat1)
  }
  if(dave.isTouching(plat2)){
    dave.collide(plat2)
  }
  if(dave.isTouching(plat3)){
    dave.collide(plat3)
  }
  if(dave.isTouching(plat4)){
    dave.collide(plat4)
  }
  if(dave.isTouching(plat5)){
    dave.collide(plat5)
  }
  if(dave.isTouching(plat6)){
    dave.collide(plat6)
  }
  if(dave.isTouching(plat7)){
    dave.collide(plat7)
  }
  if(dave.isTouching(plat8)){
    dave.collide(plat8)
  }
  
  if(dave.isTouching(d1)){
    d1.destroy()
    score=score+100
  }
  if(dave.isTouching(d2)){
    d2.destroy()
    score=score+100
  }
  if(dave.isTouching(d3)){
    d3.destroy()
    score=score+100
  }
  if(dave.isTouching(d4)){
    d4.destroy()
    score=score+100
  }
  if(dave.isTouching(d5)){
    d5.destroy()
    score=score+100
  }

  if(dave.isTouching(prize)){
    prize.destroy()
    score=score+200
  }
  
  dave.collide(ground)
drawSprites()
  fill("blue");
  text(mouseX+":"+mouseY,mouseX,mouseY);
  if(dave.isTouching(door)){
    
  end()
  }
}
  function end(){
    textSize(50)
    fill("RED")
    text("YOU WIN!",300,200)
    plat1.destroy()
    plat2.destroy()
    plat3.destroy()
    plat4.destroy()
    plat5.destroy()
    plat6.destroy()
    plat7.destroy()
    plat8.destroy()
    plat9.destroy()
    plat10.destroy()
    dave.destroy()
    d1.destroy()
    d2.destroy()
    d3.destroy()
    d4.destroy()
    d5.destroy()
    prize.destroy()
    door.destroy()
    
  }