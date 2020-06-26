

function setup() {
  //canvas is the screem and windowWidth and Heigth will be in full screen
  createCanvas(windowWidth, windowHeight);
  
  //control the game framerate
  frameRate(19);
  
  
  //instantiate Main Screen
  mainScreen = new MainScreen();
  mainScreen.setup();  
  
  game = new Game();
  
  //object scene have game:game, mainScreen:mainScreen
  scenes = {
    game,
    mainScreen
  };

  buttonManager = new ButtonManager('Start', width/2, height/2);
}

function keyPressed(){
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}

