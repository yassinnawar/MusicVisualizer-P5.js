function NeonCircles(){
    this.name = "Frequency/Amplitude Expander"
    this.x = windowWidth / 2;
    this.y = windowHeight / 2; 
    this.Red= redLevel;
    this.Green = greenLevel;
    this.Blue = blueLevel;
 
    this.draw = function(){
        push();
        var spectrum = fourier.analyze();
        angleMode(RADIANS);
        stroke(this.Red, this.Green, this.Blue);
        strokeWeight(lineWidth);
        noFill();
        translate(this.x,this.y);
        beginShape();
        var magnification = map(amplitude.getLevel(),0,1,1,amplitudePower);
        for (let a = 0; a < 360; a += magnification) {
            var index = floor(map(a,0,360,0,spectrum.length -1));
            let to = color(spectrum[index], 0, spectrum[index]);
            var t = map(spectrum[index],0,255,1,frequencyPower);
            let x = 400 * t * sin(a);
            let y = 400 * t * cos(a);
            vertex(x, y);
        }
        endShape(); 
        pop();
        this.update();
    };
    
     this.update = function() {
        this.x = windowWidth / 2; 
        this.y = windowHeight / 2;
        this.Red= redLevel;
        this.Green = greenLevel;
        this.Blue = blueLevel;
    };
};