function Particles() {
    this.name= "Particles";
    this.particles =  new Array();
    this.bins=1024;
    
    for (var i = 0; i < this.bins; i++) {
        var x = map(i, 0, 1024, 0, windowWidth*2);
        var y = random(0, windowHeight);
        var position = createVector(x, y);
        this.particles[i] = new Particle(position);
    }
    
    this.draw = function() {
        var spectrum = fourier.analyze();
        for (var i = 0; i < this.bins; i++) {
            var frequency = map(spectrum[i], 0, 255, 0, 3);
            this.particles[i].update(frequency);
            this.particles[i].draw();
            this.particles[i].position.x = map(i, 0, this.bins, 0, windowWidth * 2);
        }
    };
};