//function that load before everythings
function preload() {
    imageBackGroundCity = loadImage('assets/images/backgrounds/city.png');
    imageBackGroundSubway = loadImage('assets/images/backgrounds/subway.png');
    
    imageBoy = loadImage('assets/images/characters/boy.png');
    
    imageZombieNormalMan = loadImage('assets/images/enemies/zombie_normal_man.png');
    imageZombieMohawk = loadImage('assets/images/enemies/zombie_mohawk.png');

    imageMainScreen = loadImage('assets/images/assets/main_menu_background.png');   
    fontMainScreen = loadFont('assets/images/assets/fonteTelaInicial.otf ');   
    imageGameOver = loadImage('assets/images/assets/game-over.png');
    
    imageBee = loadImage('assets/images/others/bee.png');

    imageCoin = loadImage('assets/images/items/coin.png');
    
    soundMainScreen = loadSound('assets/sounds/background/main.mp3');
    soundCity = loadSound('assets/sounds/background/city.mp3');
    soundGameOver = loadSound('assets/sounds/background/game_over.mp3');
    soundJump = loadSound('assets/sounds/fx/jump.mp3');
    soundDeath = loadSound('assets/sounds/fx/death.mp3');
    soundCoin = loadSound('assets/sounds/fx/coin.mp3');
    soundWind = loadSound('assets/sounds/other/wind.mp3');
}
  