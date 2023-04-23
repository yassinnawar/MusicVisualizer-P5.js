function Circle(){
	this.name = "Overlapping Circle";
    this.Red= redLevel;
    this.Green = greenLevel;
    this.Blue = blueLevel;
    this.x = windowWidth / 2;
    this.y = windowHeight / 2; 
    
    this.draw = function(){
        var wave = fourier.waveform();
        background(0);
        colorMode(RGB,255);
        push();
        stroke(255);
        noFill();
        translate(this.x,this.y);
        angleMode(DEGREES);
        stroke(this.Red,this.Green,this.Blue);
        for(var t = -1 ; t <= 1 ; t+=2){
            beginShape();
            for(var i = 0 ; i <= 180 ; i++){
                var index = floor(map(i,0,180,0,wave.length -1));
                var r = map(wave[index],-1,1,-windowWidth/2,windowWidth/2);
                var xC = r * sin(i) * t;
                var yC = r *cos(i);
                vertex(xC,yC)
            }
            endShape();
        }
        push();
        stroke(this.Blue,this.Red,this.Green);
        var magnification = map(amplitude.getLevel(),0,1,0.5,2.5);
        scale(magnification);
        for(var t = -1 ; t <= 1 ; t+=2){
            beginShape();
            for(var i = 0 ; i <= 180 ; i++){
                var index = floor(map(i,0,180,0,wave.length -1));
                var r = map(wave[index],-1,1,150,350);
                var xC = r * sin(i) * t;
                var yC = r *cos(i);
                vertex(xC,yC);
            }
            endShape();
        }
        pop();
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