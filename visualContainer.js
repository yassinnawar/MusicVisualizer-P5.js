//container function for the visualisations
function VisualContainer(){
	this.visualsArray = [];
	this.currentVisual = null;


	this.add = function(visual){
		this.visualsArray.push(visual);
		if(this.currentVisual == null){
			this.setVisual(visual.name);
		}
	};

	this.setVisual = function(visualName){
		for(var i = 0; i < this.visualsArray.length; i++){
			if(visualName == this.visualsArray[i].name){
				this.currentVisual = this.visualsArray[i];
			}
		}
	};
};