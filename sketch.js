var controls = null;
var visualsContainer = null;
var sound = null;
var fourier;
var amplitude;
var input;

//Colours GUI Globals
var redLevel = 255;
var redLevelMin = 0;
var redLevelMax = 255;
var redLevelStep = 1;
var greenLevel = 255;
var greenLevelMin = 0;
var greenLevelMax = 255;
var greenLevelStep = 1;
var blueLevel = 255;
var blueLevelMin = 0;
var blueLevelMax = 255;
var blueLevelStep = 1;
var strokeLevel = 2;
var strokeLevelMin = 0.5;
var strokeLevelMax = 7;
var strokeLevelStep = 0.5;

var myColor = [255, 255, 255];

var particlesGui;
var shape = ["circle","square"];

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

var overlappingCirclesGUI;

var illusionTriangleGUI;

var hideLaunchMessage = false;


function preload(){
        sound = loadSound('assets/TheColorViolet.mp3');
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
    visualsContainer = new VisualContainer();
    visualsContainer.add(new SingleWave()); // 1
    visualsContainer.add(new SpiralWave()); // 2
    visualsContainer.add(new OverlappingCircles());
    visualsContainer.add(new Web());
    visualsContainer.add(new Radial());
    visualsContainer.add(new Triangle());
    visualsContainer.add(new Mirror());
    visualsContainer.add(new Particles());
    s= new Stars();
    visualsContainer.add(s);
    s.createStars();
    
    
    particlesGui = createGui("Particle Settings")
    particlesGui.addGlobals("shape");
    particlesGui.hide()
    
//    waveGui = createGui("Wave Settings")
//    waveGui.addGlobals("redLevel","greenLevel","blueLevel");
//    waveGui.hide();
    
    expandingShapesGui = createGui("Expanding Settings");
    expandingShapesGui.addGlobals("redLevel","greenLevel","blueLevel","lineWidth",
                                  "amplitudePower","frequencyPower");
    expandingShapesGui.hide();
    
    ColorGUI = createGui("Color Settings")
    ColorGUI.addGlobals("redLevel","greenLevel","blueLevel","strokeLevel");
    ColorGUI.hide();
}


function draw(){
    if(sound){
        background(0);
        visualsContainer.currentVisual.draw();
        controls.draw();
        controls.updateGUIVisibility();    
        hideText();  
    }
    else console.log("error loading Sound File!")
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(visualsContainer.currentVisual.hasOwnProperty('onResize')){
		visualsContainer.currentVisual.onResize();
	}
    controls.draw();
}

function mouseMoved() {
    hideLaunchMessage = true;
}

function hideText(){
    if(!hideLaunchMessage){
        push();
            strokeWeight(3);
            stroke(255,255,255);
            fill(0,0,0);
            var fontSizeRelativeToScreenSize = floor(windowHeight/100) +18
            textSize(fontSizeRelativeToScreenSize);
            text("Press 1 - 9 to switch between visuals or spacebar for menu", windowWidth/4, windowHeight/2);
        pop();
        }
}