var controls = null;
var vis = null;
var sound = null;
var fourier;
var amplitude;
var input;


var circleGui;
var redLevel = 100;
var redLevelMin = 0;
var redLevelMax = 255;
var redLevelStep = 1;
var greenLevel = 60;
var greenLevelMin = 0;
var greenLevelMax = 255;
var greenLevelStep = 1;
var blueLevel = 200;
var blueLevelMin = 0;
var blueLevelMax = 255;
var blueLevelStep = 1;
var myColor = [255, 255, 255];
var direction =0;
var directionMin=0;
var directionMax=1;
var directionStep=1;


function preload(){
// input = createFileInput(handleFile);  
//    input.size(400,400);
//    var sound = new SoundFile
    sound = loadSound('assets/dieforyou.mp3');
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    controls = new Controls();

    fourier = new p5.FFT();
    fourier.setInput(sound)
    
    amplitude = new p5.Amplitude();
    amplitude.setInput(sound);
    
    //create a new visualisation container and add visualisations
    vis = new VisualContainer();
    vis.add(new SingleWave());
    vis.add(new Wave());
    vis.add(new Circle());
    vis.add(new NeonCircles());
    vis.add(new Radial());
    vis.add(new Squares());
    vis.add(new Custom2());
    vis.add(new Particles());
    
    

    //create Circle GUI and add globals 
    circleGui = createGui("Circle Visual GUI");
    circleGui.addGlobals("myColor","redLevel","greenLevel","blueLevel","direction");
    //hide at setup
    circleGui.hide();
    //initial color black 
//    myColor = 000000;

}

function draw(){
    if(sound){
        background(0);
        vis.selected.draw();
        controls.draw();
        controls.updateButtons();
//        input.hide();
    } 
//    else{
//        console.log("Please load file")
//        input.position(windowWidth/2, windowHeight/2);
////        alert("Please Load Sound Correctly.");
//    }

}
    
function handleFile(file) {
    print(file);
    if (file.type === 'audio') {
        sound = loadSound(file.data)
    } else {
        sound = null;
        alert("Please Load Sound Correctly.");
    }
}

function mouseClicked(){
	controls.mousePressed();
}


function keyPressed(){
	controls.keyPressed(keyCode);
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selected.hasOwnProperty('onResize')){
		vis.selected.onResize();
	}
}


