var canvas;
var box1;
var rectangle1;
var rectangle2;
var rectangle3;
var rectangle4;




function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rectangle1 = createSprite(550,750,50,10);
    rectangle1.shapeColor="red";

    rectangle2 = createSprite(450,750,50,10);
    rectangle2.shapeColor="green";

    rectangle3 = createSprite(350,750,50,10);
    rectangle3.shapeColor="pink";

    rectangle4 = createSprite(250,750,50,10);
    rectangle4.shapeColor= "yellow";


    //create box sprite and give velocity
    box1=createSprite(random(20,750));
    

    box1.velocityX= -3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    CreateedgeSprite(Edges);


    //add condition to check if box touching surface and make it box
   if(rectangle1.isTouching(box1)&&box1.bounceOff(rectangle1)){
       box1.shapeColor= "red";
   
   if(rectangle2.isTouching(box1)&&box1.bounceOff(rectangle2)){
    box1.shapeColor= "green";
   }
   
   if(rectangle3.isTouching(box1)&&box1.bounceOff(rectangle3)){
    box1.shapeColor= "pink";
   }
   
   if(rectangle4.isTouching(box1)&&box1.bounceOff(rectangle4)){
    box1.shapeColor= "yellow";
   }
   
   }
   drawSprites();
   }
