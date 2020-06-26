

function setup() {
  //canvas is the screem and windowWidth and Heigth will be in full screen
  createCanvas(windowWidth, windowHeight);
  
  //control the game framerate
  frameRate(19);
  
  //Charge the game sound
  //sound.loop();
  //soundWind.loop();
  
  //instantiate class game and load setup from class game
  game = new Game();
  game.setup(); 

  //instantiate Main Screen
  mainScreen = new MainScreen();

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