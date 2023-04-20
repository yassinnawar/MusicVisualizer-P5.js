function Circle(){
	this.name = "Circle";
//    this.bool = false;
    clear();
    push();
    
    //GUI Data
    this.maxRed= redLevel;
    this.maxGreen = greenLevel;
    this.maxBlue = blueLevel;
    
    //Circle Position & Sizing
    this.x = (windowWidth / 2); //xlocation for drawing
    this.y = (windowHeight / 2); //ylocation for drawing
    
    this.draw = function(){
        var wave = fourier.waveform();
        background(0);
        push();
//        colorMode(RGB,255);
        stroke(255);
        noFill();
        translate(this.x,this.y);
        angleMode(DEGREES);
        stroke(this.maxRed,this.maxGreen,this.maxBlue);
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
        stroke(this.maxBlue,this.maxRed,this.maxGreen);
        var magnification = map(amplitude.getLevel(),0,1,0.5,2.5)
        push();
        scale(magnification);
        for(var t = -1 ; t <= 1 ; t+=2){
            beginShape();
            for(var i = 0 ; i <= 180 ; i++){
                var index = floor(map(i,0,180,0,wave.length -1));
                var r = map(wave[index],-1,1,150,350);
                var xC = r * sin(i) * t;
                var yC = r *cos(i);
                vertex(xC,yC)
            }
            endShape();
        }
        pop();
        pop();
        this.update();
    }
    
     this.update = function() {
        this.x = (windowWidth / 2); //xlocation for drawing
        this.y = (windowHeight / 2); //ylocation for drawing
        //Update Colors
        this.maxRed= redLevel;
        this.maxGreen = greenLevel;
        this.maxBlue = blueLevel;
 }
  
    pop();
}
  



    


//function setup() {
//  createCanvas(400, 400);
//  stroke("#CF3000");
//  strokeWeight(3.5);
//  slider = createSlider(3, 60, 30, 1);
//  slider.position(100, 370);
//  slider.style('width', '200px');
//}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
////////////////////////--------////////////////////////////////////////////////////////
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------//////////////////////////////////////////////////////// 
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
    
    
    
    
    
    
    
    
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------//////////////////////////////////////////////////////// 
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
////////////////////////--------////////////////////////////////////////////////////////  
    
    
    
    
    


//    this.barWidth = ceil(this.circumference/512)
    
    //Max Length of line drawn
//    this.xtoScreen = (windowWidth - this.radius - 30);
//    this.ytoScreen = (windowHeight - this.radius - 30);
//    this.maxLength = (Math.sqrt((Math.pow(this.xtoScreen,2)) + (Math.pow(this.ytoScreen/2,2))));

//	this.draw = function(){
//        var spectrum = fourier.analyze();
//        push();
//        //Move Drawing to Middle
//        translate(this.x,this.y);
//        var magnification = map(amplitude.getLevel(),0,1,1,3)
//        push();
//        //Check Direction
//        //Draw Outwards Code
//        if(this.bool == false){
//            scale(1/magnification); 
//            background(this.bg)
//            push();
//            fill(this.bg);
//            strokeWeight(8)
//            ellipse(0,0,this.diameter,this.diameter);
//            pop();
//            for(var i = 0; i<spectrum.length;i++){
//                stroke(0);
//                rotate(PI/340);
//                fill(this.maxRed,this.maxGreen,this.maxBlue);
//                var barHeight = map(spectrum[i],0,255,0,this.maxLength-200);
//                rect(-this.radius - barHeight,0,barHeight,this.barWidth);
//            }
//            pop();
//        }
//            
//        pop();
//        this.update();
//}
//    
//    
//        //Draw Inside Code
////        else{
////            background(this.bg);
////            scale(1/magnification); 
////            var newDiameter = min(windowWidth,windowHeight);
////            var newRadius = newDiameter/2;
////            var newCircumfrence = (2* PI *newRadius)
////            var newbarWidth= ceil(newCircumfrence/512)
////            fill(this.bg);
////            push();
////            strokeWeight(8)
////            ellipse(0,0,newDiameter,newDiameter);
////            pop();
////            for(var i = 0; i<spectrum.length;i++){
////                fill(255);
////                stroke(0);
////                rotate(PI/340);
////                fill(this.maxRed,this.maxGreen,this.maxBlue);
////                var barHeight = map(spectrum[i],0,255,0,newRadius-50);
////                rect(-newRadius,0 ,barHeight,this.barWidth);      
////            }
////            pop();
////        }
//
//    
//    //Recalculate Everything
//    this.update = function() {
//        this.x = (windowWidth / 2); //xlocation for drawing
//        this.y = (windowHeight / 2); //ylocation for drawing
//        this.diameter = ceil(windowWidth / 4); //Circle Diameter
//        this.radius = (this.diameter / 2)
//        this.circumference = (2 * PI * this.radius)
////        var barWidth = ceil(this.circumference/512)
////        this.xtoScreen = (windowWidth - this.radius - 300);
////        this.ytoScreen = (windowHeight - this.radius - 30);
////        this.maxLength = (Math.sqrt(
////                                    (Math.pow(this.xtoScreen,2)) + (Math.pow(this.ytoScreen/2,2))
////                                    )
////                         );
//        //Update Colors
//        this.maxRed= redLevel;
//        this.maxGreen = greenLevel;
//        this.maxBlue = blueLevel;
//        this.bg = myColor;
//       
//        //Update Drawing Direction
//        if(direction){
//            this.bool= true;
//        }
//        else{
//            this.bool=false;
//        }
//    }
   




