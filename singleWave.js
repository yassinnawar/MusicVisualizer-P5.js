function SingleWave() {
	this.name = "Single WaveForm";
    this.Red= redLevel;
    this.Green = greenLevel;
    this.Blue = blueLevel;
    this.x = (windowWidth / 2);
    this.y = (windowHeight / 2); 
    
	this.draw = function() {
		push();
        noFill();
        stroke(this.Red, this.Green, this.Blue);
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
};