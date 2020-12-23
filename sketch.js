var hr 
var mn 
var sc 

var hourHand, minuteHand, secondHand 


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
  rotate(-90)

  
}

function draw() {
  background("black"); 
  translate(200,200) 
  hr = hour()
  mn = minute()
  sc= second()

  secondHand = map(sc,0,60,0,360)
  minuteHand = map(mn,0,60,0,360)
  hourHand= map(hr%12,0,12,0,360)

  push()
  rotate(secondHand)
  stroke("red")
  strokeWeight(5)
  line(0,0,100,0)
  pop()

  push()
  rotate(minuteHand)
  stroke("blue")
  strokeWeight(5)
  line(0,0,80,0)
  pop()

  push()
  rotate(hourHand)
  stroke("green")
  strokeWeight(5)
  line(0,0,60,0)
  pop()
strokeWeight(10)
noFill()
  stroke("red")
  arc(0,0,300,300,0,secondHand)

  stroke("blue")
  arc(0,0,280,280,0,minuteHand)

  stroke("green")
  arc(0,0,260,260,0,hourHand)

  drawSprites();
}