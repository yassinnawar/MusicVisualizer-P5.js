function Stars(){

    var stars = [];
    var spectrum = fourier.analyze();
   
    this.createStars = function(){
        
        for(var i = 0; i < spectrum.length;i++){
            stars[i] = new Star();
        }
    }
    
    this.draw = function(){
        push();
        background(0)
        translate(windowWidth/2,windowHeight/2);
        angleMode(RADIANS);
        for (var i = 0; i < spectrum.length; i++){
            stars[i].display();
            stars[i].update();
        }
        pop();
    }
    
    
 
    
}