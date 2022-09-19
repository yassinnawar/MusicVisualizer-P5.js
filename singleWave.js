
function SingleWave() {
    clear();
	this.name = "Single Wave";
    
	this.draw = function() {
		push();
		noFill();
		stroke(redLevel, greenLevel, blueLevel);
        
		strokeWeight(2);
		beginShape();
		wave = fourier.waveform();
		for (i = 0; i < wave.length; i++) {
			x = map(i, 0, wave.length, 0, windowWidth);
			y = map(wave[i], -1, 1, 0, windowHeight);
			vertex(x, y);
		}

		endShape();
		pop();
	};
}