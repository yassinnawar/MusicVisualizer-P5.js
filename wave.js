function Wave(){
    this.name = "Radial Wave";
    clear();
    push();
    
    this.draw = function(){
        
        var w = fourier.waveform();
        push();
        colorMode(HSB, 360, 100, 100, 100);
        background(0, 15);
        translate(windowWidth / 2, windowHeight / 2);
        rotate(frameCount * 0.01);

        for (let i = 0; i < w.length; i++) {
            push();
            rotate(radians(i));
            var maxHeight = map(i, 0, w.length, 10, windowWidth / 2);
            var y = map(w[i], -1, 1, 0, maxHeight);
            stroke(0, 0, 100, 10);
            line(0, 0, 0, y);
            var h = map(w[i], -1, 1, 0, 360, 20);
            noStroke();
            fill(int(h), 100, 100);
            ellipse(0, y, 5, 5);
            pop();                       
        }
    pop();
        
    }
    
    pop();
}