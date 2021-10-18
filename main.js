function preload(){
}
Reflect(150, 200, 50, 55);
function setup(){
    
canvas = createCanvas(400, 450);
fill(0, 128, 0)
ellipse (55, 50, 50, 50);
fill(109,100,100)
rect(55, 44, 250, 10);
fill(0, 128, 0)
ellipse (310, 50, 50, 50);
fill(109,100,100)
rect(55, 44, 10, 250);
canvas.position(150, 280);
fill(0, 128, 0)
   ellipse (55, 300, 50, 50);
   fill(109,100,100)
  rect(55, 290, 250, 10);
  fill(0, 128, 0)
  ellipse (310, 300, 50, 50);
  fill(109,100,100)
  rect(300, 44, 10, 250);
video = createCapture(VIDEO);
video.hide();
tint_color = "";
}
function draw(){
    
  image(video, 0, 0, 400, 450);
  tint(tint_color);
}
   

function filter_tint(){
tint_color = document.getElementById("color_name").value;
}
function take_snapshot(){
save('student_name.png');
}