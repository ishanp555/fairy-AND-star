var backgroundImg,backgroundimg;
var fairy,fairyimg;
var star,starimg

function preload()
{
   //preload the images here

   backgroundimg = loadImage ("starnight.png")

   fairyimg = loadAnimation ("running","fairy.png,fairy1.png,fairy2.png")

   starimg = loadImage ("star.png")
}

function setup() {
  createCanvas(800, 750);
  
   backgroundImg =createSprite (800,750)
   backgroundImg.addImage  (backgroundimg)
   
   fairy = createSprite (400,300,10,10);
   fairy.addAnimation (fairyimg)

   star = createSprite (200,200,5,5);
   star.addImage (starimg)

}

function draw() {
  background("black");
drawSprites();
}
