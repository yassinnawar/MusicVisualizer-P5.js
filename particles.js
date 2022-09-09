function Particles() {
    this.name= "Particles";
    this.particles =  new Array();
    this.bins=1042;
    
//Create Particles
  for (var i = 0; i < this.bins; i++) {
    var x = map(i, 0, 1024, 0, windowWidth*2);
    var y = random(0, windowHeight);
    var position = createVector(x, y);
    this.particles[i] = new Particle(position);
  }
    
   
    
    this.draw = function() {
        var spectrum = fourier.analyze();
        for (var i = 0; i < this.bins; i++) {
            var level = map(spectrum[i], 0, 255, 0, 1);

            // update values based on amplitude at this part of the frequency spectrum
            this.particles[i].update(level);
            this.particles[i].draw();
            // update x position (in case we change the bin count while live coding)
            this.particles[i].position.x = map(i, 0, this.bins, 0, windowWidth * 2);
        }
    }
    
    

}