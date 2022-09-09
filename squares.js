function Squares(){
    this.name ="squares"
    this.rows = 10;
    this.columns = 10;

    
    this.draw = function(){
//        push(); 
        var spectrum = fourier.analyze();
        var cellNumber = 1
        var cellWidth = windowWidth / this.columns;
        var cellHeight = windowHeight / this.rows;
        // for loops for drawing squares
        for(let r = 1; r <= this.rows ; r++){
            
            for(let c = 0 ; c <= this.columns; c++){
          
                var x = ((c / this.rows) * windowWidth); 
                var y = windowHeight - (r/this.columns  * windowHeight)
                var colour = spectrum[ceil((r+c)/2)*cellNumber]
                
                if(c<2){
                    fill(colour,0,0)
                }  
                else if(c<4){
                    fill(0,colour,0)
                }
                else if(c<6){
                    fill(0,0,colour)
                }
                else if(c<8){
                    fill(colour,0,colour)
                }
                else {
                    fill(colour,colour,0)
                }
                
                rect(x, y, cellWidth, cellHeight);
                // printing cell numbers on screen
//                fill(255)
//                textSize(26);
//                text("cell no"+(cellNumber) ,x,y,cellWidth,cellHeight);
                
                cellNumber+=1
            }
            // correct cellNumber after each coloumn loop
             cellNumber-=1   
        }
        
//        pop();
        }
    
    }
