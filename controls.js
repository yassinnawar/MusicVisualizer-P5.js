function Controls(){
	this.menuDisplayed = false;
	this.playButton = new PlayButton();
	
    this.draw = function(){
        push();
        var fontSizeRelativeToScreenSize = floor(windowHeight/100) +18
//        var fontSizeRelativeToScreenSize = floor(map(h,0,windowHeight,14,36));
//        console.log(fontSizeRelativeToScreenSize);
        textSize(fontSizeRelativeToScreenSize);
		this.playButton.draw();
		if(this.menuDisplayed){
			
			this.drawMenu();
		}
		pop();
	};
    
    this.drawMenu = function(){
        push();
        var rowHeight = windowWidth/20 ;
        strokeWeight(3);
        stroke(255,255,255);
        fill(0,0,0);
        text("Choose a Visualisation:", 50, rowHeight);
		for(var i = 0; i < visualsContainer.visualsArray.length; i++){
			var yLoc = 2*rowHeight  + i*rowHeight;
			text((i+1) + ": " +visualsContainer.visualsArray[i].name, 100, yLoc);
		}
        pop();
	};
    
    this.mousePressed = function(){
        if(!this.playButton.playButtonPressed() && (mouseX>2*windowWidth/3)){
            var fs = fullscreen();
			 fullscreen(!fs);
        }
    };
    
	this.keyPressed = function(keycode){
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}
		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			visualsContainer.setVisual(visualsContainer.visualsArray[visNumber].name); 
		}
        else {
            console.log("Visual doesn't exist, Choose from 1-9");
        }
	};

	
    this.updateGUIVisibility = function(){
        if (mouseX > windowWidth/3) this.hideGUIs();
          
        else if (visualsContainer.currentVisual.name == "Particles"){
            this.hideGUIs();
            particlesGui.show();
        }
        else if (visualsContainer.currentVisual.name == "Single WaveForm"){
            this.hideGUIs();
            ColorGUI.show();
        }
        else if(visualsContainer.currentVisual.name == "Frequency/Amplitude Web"){
            this.hideGUIs();
            expandingShapesGui.show();
        }
        else if(visualsContainer.currentVisual.name == "Overlapping Circles"){
            this.hideGUIs();
            ColorGUI.show();
        }
        else if(visualsContainer.currentVisual.name == "Illusion Triangle"){
            this.hideGUIs();
            ColorGUI.show();
        }
        else {
            this.hideGUIs();
        }
    };

    this.hideGUIs = function(){
        particlesGui.hide();
        ColorGUI.hide();
        expandingShapesGui.hide();
    };
};