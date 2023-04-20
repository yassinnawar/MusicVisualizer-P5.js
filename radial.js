function Radial(){
    this.name = "Radial Shapes";
    clear();
    push();
    
    
    this.draw = function() {
    push();
    angleMode(RADIANS);
    background(0);
	translate(windowWidth / 2, windowHeight / 2);
	level = amplitude.getLevel();
	fourier.analyze();

	var bass = fourier.getEnergy(100, 150);
	var treble = fourier.getEnergy(150, 250);
	var mid = fourier.getEnergy("mid");

	var mapMid = map(mid, 0, 255, -100, 200);
	var scaleMid = map(mid, 0, 255, 1, 1.5);
    
	var mapTreble = map(treble, 0, 255, 200, 350);
	var scaleTreble = map(treble, 0, 255, 0, 1);

	var mapbass = map(bass, 0, 255, 50, 200);
	var scalebass = map(bass, 0, 255, 0.05, 1.2);

	mapMouseX = map(mouseX, 0, width, 1, 50);
	mapMouseXbass = map(mouseX, 0, width, 1, 5);
	mapMouseY = map(mouseY, 0, height, 2, 6);

	pieces = 20;
	radius = 100;

	for (i = 0; i < pieces; i += 0.1) {
		rotate(TWO_PI / (pieces / 2));
		noFill();

		/*----------  BASS  ----------*/
		push();
		stroke(100,0,0);
		rotate(frameCount * 0.002);
		strokeWeight(0.5);
		polygon(mapbass + i, mapbass - i, mapMouseXbass * i, 3);
		pop();
        
		/*----------  MID  ----------*/
		push();
		stroke(0,100,100);
		strokeWeight(0.2);
		ellipse(mapMid + i / 2, mapMid - i * 2, mapMouseX * i, 7);
		pop();

		/*----------  TREBLE  ----------*/
		push();
		stroke(0,0,100);
		strokeWeight(0.6);
		scale(mouseX * 0.0005);
		rotate((mouseX * 0.002));
		polygon(mapTreble + i / 2, mapTreble - i / 2, mapMouseY * i / 2, 3);
		pop();
	}
        pop();
}

    
function polygon(x, y, radius, npoints) {
	var angle = TWO_PI / npoints;
	beginShape();
	for (var a = 0; a < TWO_PI; a += angle) {
		var sx = x + cos(a) * radius;
		var sy = y + sin(a) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}
    
    pop();
}