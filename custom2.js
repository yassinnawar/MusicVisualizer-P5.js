function Custom2() {
    this.name = "invert";
    
    

    this.draw= function() {

//        var spectrum = fourier.analyze();
//        for( var i = 0; i<spectrum.length;i++)
//            var height = map(spectrum[i],0,255,0,windowHeight/2)
//            var x = map(i,0,spectrum.length - 1,0,windowWidth/2)
//            
//            var width = 20
//            line(0,x,)
//        
        
          push();

//        translate(0,0)
//        scale(0.5)
//        fill(0,255,0)
//        ellipse(50,50,100,100)
//         translate(-700,0)
          var spectrum = fourier2.analyze()
//        console.log(spectrum)
//		  noStroke();
//        var count = 1;
          for(var i = 0; i< spectrum.length; i++){
            var g = map(spectrum[i], 0, 255, 255, 0);
              
            fill(spectrum[i], 0, g);
		 	var x = map(i, 0, spectrum.length - 1, windowWidth/2, 0);
              
		    var h = -windowHeight + map(spectrum[i], 0, 255, windowHeight, 30);
		    rect(x-i, windowHeight, 2, h);
              
   		}
        
         for (var i = 0; i< spectrum.length; i++){
             var g = map(spectrum[i], 0, 255, 255, 0);
			fill(spectrum[i], 0, g);
             
		 	var x = map(i, 0, spectrum.length - 1 , windowWidth/2, windowWidth);
		     var h = -windowHeight + map(spectrum[i], 0, 255, windowHeight, 30);
		     rect(x+i, windowHeight, 2, h );
   		}


//		
        
        
//        for(var i = 0; i< spectrum.length; i++){
////            var g = map(spectrum[i], 0, 255, 255, 0);
//            
//		 	var x = map(i, 5, spectrum.length - 1, 0, windowWidth/2);  
//		    var h = map(spectrum[i], 0, 255, 0, windowHeight);
////            console.log(h)
////		    line(x, windowHeight, 0, 100);
////            stroke(255,0,0)
//            strokeWeight(3)
//            stroke(spectrum[i], 0, 0);
////            console.log(spectrum[i])
//            line(x+(3*i), windowHeight, x+(3*i),h);
//              
//   		}
		pop();
  
    }
      
}
