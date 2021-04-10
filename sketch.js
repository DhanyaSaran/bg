var plyr , backgroundimg
var count = 0 , incre
var question= []
var answer= []
var c=1




function preload(){
player=loadImage("charter.png")
backgroundimg=loadImage('pixel.jpg')




}



function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
 plyr=createSprite(50, displayHeight-200, 50, 50);
 plyr.addImage(player)
 plyr.scale=0.5
 form= new Form()
 form.display()

 if (count=== 1 ){


  textSize(14)
  
  fill("yellow")
   text(question[count-1],200,200 )
  
  }
}

function draw() 
{
  background(backgroundimg); 
  
  
  if (keyDown("UP_ARROW")){
plyr.y=plyr.y-50

  }

  
  if (keyDown("DOWN_ARROW")){
    plyr.y=plyr.y+50
    
      }
        
  if (keyDown("RIGHT_ARROW")){
    plyr.x=plyr.x+50
    
      }
        
  if (keyDown("LEFT_ARROW")){
    plyr.x=plyr.x-50
    
      }

      if(count === 1 ){
     textSize(20)
     fill("darkblue")
     text("Level 1",50,50 )

      }
question.push("what is the square root of 225 ")
question.push("what is 2 to the power of three")
answer=[[15,16,17,10]]


for( var a in question)

{

if (count=== 1 )
{

textSize(18)
textFont("calibri")

fill("Black")
 text(question[count-1],300,70 )
 
 var y=100
 var c=0
  //for(var b=0; b<4; b++)

 
    if (c===0)
    {
      
    text(answer[count-1][c],300,400)
    //y=y+Math.round(random(10,50))
      c=1;
    }
    
    if(c===1)
    {//y=y+Math.round(random(100,200))
      text(answer[count-1][c],220,300)
      
        c=2

    }
    if(c===2)
    {
      text(answer[count-1][c],570,200)
      
        x=3
    }


// }





}

}






  drawSprites();

}

