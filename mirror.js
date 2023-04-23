function Mirror() {
    this.name = "Mirror";    
    this.draw = function(){
        push();
        var spectrum = fourier2.analyze();
        for(var i = 0; i< spectrum.length; i++){
            var blue = map(spectrum[i], 0, 255, 255, 0);
            fill(spectrum[i], 0, blue);
            var x = map(i, 0, spectrum.length - 1, windowWidth/2, 0);
		    var h = -windowHeight + map(spectrum[i], 0, 255, windowHeight, windowHeight/4);
            rect(x-i, windowHeight, 2, h);     
   	    }
         for(var i = 0; i< spectrum.length; i++){
             var g = map(spectrum[i], 0, 255, 255, 0);
			 fill(spectrum[i], 0, g);
		 	 var x = map(i, 0, spectrum.length - 1 , windowWidth/2, windowWidth);
		     var h = -windowHeight + map(spectrum[i], 0, 255, windowHeight, windowHeight/4);
		     rect(x+i, windowHeight, 2, h );
   		}
		pop();
    };   
};