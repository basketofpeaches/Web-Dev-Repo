var headsize = 40;
var bodyrotate = 12;
var legoffset = -10;
var legincr = 0.3;



function setup() {
		resetMatrix(); // reset everything
let thecanvas = createCanvas(800, 700);
	background(0);
}

function draw() {
	translate(mouseX, mouseY);
	fill(10, 236, 93);
	push();
	translate(legoffset, 4);
	rotate(bodyrotate);
  translate(-150, -150); // move 40 pixels up
	
	
	
	fill(8, 52, 63);
	strokeWeight(7);
  ellipse(mouseX, mouseY, 100, 100);
	
	fill(12, 92, 112);
	noStroke();
	ellipse(mouseX, mouseY, 80, 80);
	
	fill(36, 138, 164);
  ellipse(mouseX, mouseY, 60, 50);
	
	
	fill(101, 222, 252);
	translate(10, 20, 6); 
	ellipse(mouseX, mouseY, 40, 30);
	
	
	
	bodyrotate-=0.03
	pop();
	legoffset+=legincr;
	if(legoffset>400) legincr*=-1;
	if(legoffset<-400) legincr*=-1;
	
	
	
	
	
	//fill(0);
	push();
	//translate(mouseX, mouseY);
	translate(legoffset, 4);
	rotate(bodyrotate);
  //translate(-150, -150); // move 40 pixels up
  //ellipse(0, 0, 30, 30);
	bodyrotate-=30
	pop();
	legoffset+=legincr;
	if(legoffset>400) legincr*=-1;
	if(legoffset<-400) legincr*=-1;

}