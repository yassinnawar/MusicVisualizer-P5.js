function Controls(){
	this.menuDisplayed = false;
	this.playbackButton = new PlaybackButton();
	this.mousePressed = function(){
        if(!this.playbackButton.playButtonPressed() && (mouseX>2*windowWidth/3)){
            var fs = fullscreen();
			 fullscreen(!fs);
        }
    };

    this.draw = function(){
        push();
        var fontSizeRelativeToScreenSize = floor(windowHeight/100) +18
//        var fontSizeRelativeToScreenSize = floor(map(h,0,windowHeight,14,36));
        console.log(fontSizeRelativeToScreenSize);
        textSize(fontSizeRelativeToScreenSize);
		this.playbackButton.draw();
		if(this.menuDisplayed){
			
			this.drawMenu();
		}
		pop();
	};
    
	this.keyPressed = function(keycode){
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}
		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
        else {
            console.log("Visual doesn't exist");
        }
	};

	this.drawMenu = function(){
        push();
        var rowHeight = windowWidth/20 ;
        strokeWeight(3);
        stroke(255,255,255);
        fill(0,0,0);
        text("Choose a Visualisation:", 50, rowHeight);
		for(var i = 0; i < vis.visuals.length; i++){
			var yLoc = 2*rowHeight  + i*rowHeight;
			text((i+1) + ": " +vis.visuals[i].name, 100, yLoc);
		}
        pop();
	};
        
    this.updateGUIVisibility = function(){
        if (mouseX > windowWidth/3) this.hideGUIs();
          
        else if (vis.selected.name == "Circle"){
            this.hideGUIs();
            circleGui.show();
        }
        else if (vis.selected.name == "Particles"){
            this.hideGUIs();
            particlesGui.show();
        }
        else if (vis.selected.name == "Single WaveForm"){
            this.hideGUIs();
            waveGui.show();
        }
        else if(vis.selected.name == "Frequency/Amplitude Expander"){
            this.hideGUIs();
            expandingShapesGui.show();
        }
        else {
            this.hideGUIs();
        }
    };

    this.hideGUIs = function(){
        circleGui.hide();
        particlesGui.hide();
        waveGui.hide();
        expandingShapesGui.hide();
    };
};