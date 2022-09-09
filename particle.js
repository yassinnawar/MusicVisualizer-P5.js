function Particle( position ) {
    this.position = position;
    this.scale = 1
    this.speed = createVector(0, random(0, 10));

//    this.shape= shape
    
    //GUI Controls
    this.color = [random(0, 255), random(0,255), random(0,255),random(0,100)];
     this.color = [random(0, 255), random(0,255), random(0,255)];
    var userScale = 0.3;
    
    
    
    this.draw = function() {
            var spectrum = fourier.analyze();
            this.scale = map(amplitude.getLevel(),0,1,1,5);
        fill(this.color);
    
//        if(this.shape=="circle"){
            ellipse(this.position.x, this.position.y,this.diameter, this.diameter);
//            }
//        else {
//            rect(this.position.x, this.position.y,this.diameter, this.diameter);
//        }
    }


    this.update = function(someLevel) {
      this.position.y += this.speed.y / (someLevel*2);
      if (this.position.y > windowHeight) {
        this.position.y = 0;
      }
      this.diameter = map(someLevel, 0, 1, 0, 100) * this.scale * userScale;
//        this.shape = shape;
    }

    
 
    
}