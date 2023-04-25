function SingleWave() {
	this.name = "Single WaveForm";
    this.Red= redLevel;
    this.Green = greenLevel;
    this.Blue = blueLevel;
    this.s = strokeLevel;

    
	this.draw = function() {
		push();
        noFill();
        stroke(this.Red, this.Green, this.Blue);
        strokeWeight(this.s);
        beginShape();
        wave = fourier.waveform();
        for (i = 0; i < wave.length; i++) {
            x = map(i, 0, wave.length, 0, windowWidth);
            y = map(wave[i], -1, 1, 0, windowHeight);
            vertex(x, y);
        }
        endShape();
		pop();
        this.update();
	};
    
    this.update = function(){
        this.Red= redLevel;
        this.Green = greenLevel;
        this.Blue = blueLevel;
        this.s = strokeLevel;
    }
};