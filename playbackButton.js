//displays and handles clicks on the playback button.
function PlaybackButton(){
	
	this.x = windowWidth - 100;
	this.y = 40;
	this.size = 40;
	this.playing = false;

	this.draw = function(){
		if(this.playing){
			rect(this.x, this.y, this.size/2 - 5, this.size);
			rect(this.x + (this.size/2 + 5), this.y, this.size/2 - 5, this.size);
		}
		else{	
			triangle(this.x, this.y, this.x + this.size, this.y + this.size/2, this.x, this.y+this.size);
		}
        this.updatePosition();
	};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.
	this.playButtonPressed = function(){
		if((mouseX > this.x) && (mouseX < this.x + this.size) && (mouseY > this.y) && ( mouseY < this.y + this.size)){
			if(sound.isPlaying()) {
    			sound.pause();
  			} else {
    			sound.loop();
  			}
  			this.playing = !this.playing;
  			return true;
		}
			return false;
	};
    
     this.updatePosition= function(){
        this.x = windowWidth-100;
    }

}