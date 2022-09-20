function Circle(){
	this.name = "Circle";
    this.bool = false;
    clear();
    
    //GUI Data
    this.maxRed= redLevel;
    this.maxGreen = greenLevel;
    this.maxBlue = blueLevel;
    this.bg = myColor;
    
    //Circle Position & Sizing
    this.x = (windowWidth / 2); //xlocation for drawing
    this.y = (windowHeight / 2); //ylocation for drawing
    this.diameter = ceil(windowWidth / 4); //Circle Diameter
    this.radius = (this.diameter / 2)
    this.circumference = (2 * PI * this.radius)
    this.barWidth = ceil(this.circumference/512)
    
    //Max Length of line drawn
    this.xtoScreen = (windowWidth - this.radius - 30);
    this.ytoScreen = (windowHeight - this.radius - 30);
    this.maxLength = (Math.sqrt((Math.pow(this.xtoScreen,2)) + (Math.pow(this.ytoScreen/2,2))));

	this.draw = function(){
        var spectrum = fourier.analyze();
        push();
        
        //Move Drawing to Middle
        translate(this.x,this.y);
        
        //Scale Down the drawing when beat increases
        var magnification = map(amplitude.getLevel(),0,1,1,3)
        //number of vertical rectangles from center

        push();
        //Check Direction
        //Draw Outwards Code
        if(this.bool == false){
            scale(1/magnification); 
            background(this.bg)
            push();
            fill(this.bg);
            strokeWeight(8)
            ellipse(0,0,this.diameter,this.diameter);
            pop();
            for(var i = 0; i<spectrum.length;i++){
                stroke(0);
                rotate(PI/340);
                fill(this.maxRed,this.maxGreen,this.maxBlue);
                var barHeight = map(spectrum[i],0,255,0,this.maxLength-200);
                rect(-this.radius - barHeight,0,barHeight,this.barWidth);
            }
            pop();
        }
        //Draw Inside Code
        else{
            background(this.bg);
            scale(1/magnification); 
            var newDiameter = min(windowWidth,windowHeight);
            var newRadius = newDiameter/2;
            var newCircumfrence = (2* PI *newRadius)
            var newbarWidth= ceil(newCircumfrence/512)
            fill(this.bg);
            push();
            strokeWeight(8)
            ellipse(0,0,newDiameter,newDiameter);
            pop();
            for(var i = 0; i<spectrum.length;i++){
                fill(255);
                stroke(0);
                rotate(PI/340);
                fill(this.maxRed,this.maxGreen,this.maxBlue);
                var barHeight = map(spectrum[i],0,255,0,newRadius-50);
                rect(-newRadius,0 ,barHeight,this.barWidth);      
            }
            pop();
        }
            pop();
        this.update();
    }
    
    //Recalculate Everything
    this.update = function() {
        this.x = (windowWidth / 2); //xlocation for drawing
        this.y = (windowHeight / 2); //ylocation for drawing
        this.diameter = ceil(windowWidth / 4); //Circle Diameter
        this.radius = (this.diameter / 2)
        this.circumference = (2 * PI * this.radius)
        var barWidth = ceil(this.circumference/512)
        this.xtoScreen = (windowWidth - this.radius - 300);
        this.ytoScreen = (windowHeight - this.radius - 30);
        this.maxLength = (Math.sqrt(
                                    (Math.pow(this.xtoScreen,2)) + (Math.pow(this.ytoScreen/2,2))
                                    )
                         );
        //Update Colors
        this.maxRed= redLevel;
        this.maxGreen = greenLevel;
        this.maxBlue = blueLevel;
        this.bg = myColor;
       
        //Update Drawing Direction
        if(direction){
            this.bool= true;
        }
        else{
            this.bool=false;
        }
    }
   
}



