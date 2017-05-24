var gamemode = 0;  //0 = welcome screen, 1 = playing
var clicks = 0;
//var startTime=getTime();
//var elapsedTime=((getTime()-startTime)/1000);
var img;
function preload() {
  img = loadImage("1.jpg");
}

function setup() {
  createCanvas(800,600);
}

function draw() {
  if (gamemode == 0) {
    background(244,164,96);
    textSize(70);
    textFont()
    text("Stump Smacker", 150, 170);
  } else if (gamemode == 1) {
    background(178,34,34);
    text("smash the stump", 30, 30);
    text(clicks + " Stumps Smacked.", 30, 90);
    var imgX = random(width);
    var imgY = random(height);
    console.log(imgX + " " + imgY);
    image(img, imgX, imgY);
  }
}

function keyTyped(){
  console.log(key);
  gamemode = 1;
}
