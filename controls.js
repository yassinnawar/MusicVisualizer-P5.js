function Controls(){
	
	this.menuDisplayed = false;
	this.playbackButton = new PlaybackButton();
    
	this.mousePressed = function(){
         if(!this.playbackButton.playButtonPressed() && (mouseX>2*windowWidth/3)){
                 var fs = fullscreen();
			     fullscreen(!fs);
             }
        };

	this.keyPressed = function(keycode){
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}
		if(keycode > 48 && keycode < 57){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
        else {
            console.log("Visual doesn't exist")
        }
	};

	this.draw = function(){
        push();
        strokeWeight(3)
        stroke(255,255,255)
        fill(0,0,0)
        textSize(34);
		this.playbackButton.draw();
		if(this.menuDisplayed){
			text("Choose a Visualisation:", 50, 100);
			this.drawMenu();
		}
		pop();
	};

	this.drawMenu = function(){
        push();
		for(var i = 0; i < vis.visuals.length; i++){
			var yLoc = 150  + i*50;
            textSize(30);
            strokeWeight(3)
            stroke(255,255,255)
            fill(0,0,0)
			text((i+1) + ": " +vis.visuals[i].name, 100, yLoc);
		}
          pop();
	};
    

    this.checkCircle = function(){
         if(vis.selected.name == 'circle')
             {
                 vis.selected.bool = !vis.selected.bool
             }
    }
    
        
    this.updateButtons = function(){
         if (mouseX > windowWidth/3)
          {
              this.hideAll();
          }
        else if (vis.selected.name == "Circle"){
            this.hideAll();
            circleGui.show();
        }
        else if (vis.selected.name == "Particles"){
            this.hideAll();
            particlesGui.show();
        }
        else if (vis.selected.name == "Single Wave"){
            this.hideAll();
            waveGui.show();
        }
        else {
            this.hideAll();
        }
    }


    this.hideAll = function(){
        circleGui.hide();
        particlesGui.hide();
        waveGui.hide()
    }
}


