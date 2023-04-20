var controls = null;
var vis = null;
var sound = null;
var fourier;
var amplitude;
var input;


//Colours GUI Globals
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

var circleGui;
var myColor = [255, 255, 255];

var particlesGui;
var shape = ["circle","square"]

var waveGui;

var expandingShapesGui;
var amplitudePower = 5;
var frequencyPower = 1;
var amplitudePowerMin = 5;
var amplitudePowerMax = 15;
var frequencyPowerMin = 1;
var frequencyPowerMax = 5;
var lineWidth = 0.5;
var lineWidthMin = 0.25;
var lineWidthMax = 5;
var lineWidthStep = 0.25;



function preload(){
    sound = loadSound('assets/dieforyou.mp3');
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    controls = new Controls();

    fourier = new p5.FFT();
    fourier2 = new p5.FFT(0.8,512)
    fourier.setInput(sound)
    fourier2.setInput(sound)
    amplitude = new p5.Amplitude();
    amplitude.setInput(sound);
    
    //create a new visualisation container and add visualisations
    vis = new VisualContainer();
    vis.add(new SingleWave()); // 1
    vis.add(new SpiralWave()); // 2
    vis.add(new Circle());
    vis.add(new NeonCircles());
    vis.add(new Radial());
    vis.add(new Squares());
    vis.add(new Mirror());
    vis.add(new Particles());
    s= new Stars()
    vis.add(s);
    s.createStars();
    
    
    

    //create GUIs and add their globals then hide them upon launch
    circleGui = createGui("Circle Settings");
    circleGui.addGlobals("redLevel","greenLevel","blueLevel"); 
    circleGui.hide();
    
    particlesGui = createGui("Particle Settings")
    particlesGui.addGlobals("shape");
    particlesGui.hide()
    
    waveGui = createGui("Wave Settings")
    waveGui.addGlobals("redLevel","greenLevel","blueLevel");
    waveGui.hide();
    

    expandingShapesGui = createGui("Expanding Settings");
    expandingShapesGui.addGlobals("redLevel","greenLevel","blueLevel","lineWidth",
                                  "amplitudePower","frequencyPower");
    expandingShapesGui.hide();
}

function draw(){
    if(sound){
        background(0);
        vis.selected.draw();
        controls.draw();
        controls.updateButtons();
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


