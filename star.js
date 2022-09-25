function Star(){
    this.x = random(-windowWidth*2,windowWidth*2);
    this.y = random(-windowHeight*4,windowHeight*4);
    this.z = random(windowWidth*2,windowWidth*4);
    this.pz = this.z;
    this.px = this.x;
    this.py = this.y;
    var speedstar=1
    
    this.display = function(){
        spectrum = fourier.analyze();
        var r = ceil(random(0,spectrum.length/4))
        console.log(r)
        speedstar = map(amplitude.getLevel(), 0, 1, 3, 400);
        c = map(amplitude.getLevel(), 0, 1, 0, 255);
        var sx = map(this.x/this.z/2, -1, 1, -windowWidth, windowWidth);
        var sy = map(this.y/this.z/2, -1, 1, -windowHeight, windowHeight);
        
//        var percent = norm(dist(sx,sy,0,0), 0, 400);
//        var from = color(spectrum[30]/2, 255, spectrum[50]);
//        var to = color(255, spectrum[30]/2, spectrum[50]);
        
         var percent = norm(dist(sx,sy,0,0), 0, 400);
        var from = color(255, 0, c/2);
        var to = color(0, c/2, c);
        
        var r = map(dist(sx,sy,this.px,this.py),0,windowWidth*3,3,10);
        var between = lerpColor(from, to, percent);
        stroke(between);
        strokeWeight(r);

        if(this.z >= 1 && sx <= windowWidth && sx > -windowWidth && sy > -windowHeight && sy < windowHeight ){
            line(this.px,this.py,sx,sy);   
            this.px = sx;     
            this.py = sy;
        }  
    }
    
     this.update = function(){
        this.z -= speedstar; //speed   
        if(this.z < 1){
            this.z = random(windowWidth*2,windowWidth*4);
            this.x = random(-windowWidth*2,windowWidth*2);
            this.y = random(-windowHeight*4,windowHeight*4);
            this.px = map(this.x/this.z/2, -1, 1, -windowWidth, windowWidth);
            this.py = map(this.y/this.z/2, -1, 1, -windowHeight, windowHeight);
        }
     }
}