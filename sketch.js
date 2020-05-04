var canvas;
var yesCount,noCount;

var database;

var survey;


function setup(){
  canvas = createCanvas(1000,1200);
  database = firebase.database();
  survey = new Form();
 
}


function draw(){
background(255);
text("1. Do you have intrest in donations",250,180);
text("2. Would you like to spend some time with elderly people?",250,240);
text("3. Would you like to donate money to the old age homes?")
}
