function Triangle(){
    this.name ="Illusion Triangle"
    this.step = 0;
    
    
    this.Red= redLevel;
    this.Green = greenLevel;
    this.Blue = blueLevel;
    this.x = windowWidth / 2;
    this.y = windowHeight / 2; 
    this.s = strokeLevel;
    
    this.draw = function(){
        push();
        background(0);
        angleMode(RADIANS);
        var spectrum = fourier2.analyze();
        translate(windowWidth/2, windowHeight/2);
        var mag = map(amplitude.getLevel(),0,1,0.5,1.25);
        scale(mag);
        noFill();
//        strokeWeight(7*cos(this.step)+13);
        strokeWeight(this.s);
        for (i = 5; i < spectrum.length; i+=5){
            push();
            if (i%10 == 0) stroke("black");
            else stroke(this.Red,this.Green,this.Blue);
            fourier.analyze();
            var bass = fourier.getEnergy("bass");
	        var treble = fourier.getEnergy("treble");
	        var mid = fourier.getEnergy("mid");
            var mapbass = map(bass, 0, 255, 0, PI/2);
            var maptreble = map(treble, 0, 255, 0, PI/2);
            var mapmid = map(mid, 0, 255, 0, -PI/2);
            var value = mapbass + mapmid + maptreble;
            
            rotate(value);
            beginShape();
            for (let angle = 0; angle < TWO_PI; angle += TWO_PI/3){
                var index = floor(map(i,5,400,0,spectrum.length));
                var a = map(spectrum[i],0,255,0,PI/2);
                rotate(a);
                let x = cos(angle) * i;
                let y = sin(angle) * i;
                vertex(x, y);
            }
            endShape(CLOSE);
            pop();
        }

        pop();
        this.update();
    }
    
    this.update = function(){
        this.Red= redLevel;
        this.Green = greenLevel;
        this.Blue = blueLevel;
        this.x = windowWidth / 2;
        this.y = windowHeight / 2; 
        this.s = strokeLevel;
    }
 
}

