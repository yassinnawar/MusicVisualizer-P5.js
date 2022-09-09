//container function for the visualisations
function VisualContainer(){
	this.visuals = [];
	this.selected = null;


	this.add = function(vis){
		this.visuals.push(vis);
		if(this.selected == null){
			this.selectVisual(vis.name);
		}
	};

	this.selectVisual = function(visName){
		for(var i = 0; i < this.visuals.length; i++){
			if(visName == this.visuals[i].name){
				this.selected = this.visuals[i];
			}
		}
	};
}
