function NeonCircles(){
    this.name = "Neon Circles"
    clear();
    
    this.draw = function(){
        push();
        background(1,20);
        noFill();
        strokeWeight(2);
        
        // flag to control colouring
        var flag = false
        
        var spectrum = fourier.analyze();  
        var magnification = map(amplitude.getLevel(),0,1,0.9,1.1)
        scale(magnification); 

        for(var x=windowWidth+200; x>0;x=x-100){
            for(var y=windowHeight+200; y>0; y=y-100){
                // transform y to index respective to fourier array
                let index = map(y,windowHeight,0,0,1024)
                index = ceil(index);

                rX=spectrum[index]%150;
                gX=spectrum[index]%200;
                bX=spectrum[index]%255;
                             
                // disable coloring when not playing
                if(spectrum[index]<2){
                    rY=spectrum[index]%155;
                    gY=spectrum[index]%180;
                    bY=spectrum[index]%250;
                    flag = false;
                }
                else {
                    rY=spectrum[index]%155;
                    gY=spectrum[index]%180;
                    bY=spectrum[index]%250;
                    
                    rY2=mouseY%155;
                    gY2=mouseY%180;
                    bY2=mouseY%250;
                    
                    // set coloring to be controlled by fourier value and mouseY position
                    rY3=(rY + rY2) % 155
                    gY3=(rY + rY2) % 180;
                    bY3=(rY + rY2) % 250;
                    flag = true;  
                }
                    
                let angleX = map(spectrum[index],0,255,0,360)
                let angleY = map(spectrum[index],0,255,0,360)
                    
                if(flag==true){
                    stroke(rX,gX,bX);
                        arc(x,y,75,75,0,angleX+x%90+y%90);
                    stroke(rY3,gY3,bY3);
                        arc(x,y,65,65,-90,angleY+x%45+y%45);
                    stroke(rX,gY3,bX);
                        arc(x,y,55,55,90,angleY+x%90+y%90);
                    stroke(rX,gY3,bY3);
                        arc(x,y,45,45,180,angleY+x%45+y%45);
                    stroke(rY3,gX,bY3);
                        arc(x,y,35,35,270,angleY+x%90+y%90);
            }
                else{
                    stroke(rX,gX,bX);
                        arc(x,y,75,75,0,angleX+x%90+y%90);
                    stroke(rY,gY,bY);
                        arc(x,y,65,65,-90,angleY+x%45+y%45);
                    stroke(rX,gY,bX);
                        arc(x,y,55,55,90,angleY+x%90+y%90);
                    stroke(rX,gY,bY);
                        arc(x,y,45,45,180,angleY+x%45+y%45);
                    stroke(rY,gX,bY);
                        arc(x,y,35,35,270,angleY+x%90+y%90);
                }
            }
        }
        //exit for loops
      pop();  
    }
    
  
}