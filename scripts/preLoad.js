//function that load before everythings
function preload() {
    imageIntro1 = loadImage('assets/images/backgrounds/intro/intro1.jpg');
    imageIntro2 = loadImage('assets/images/backgrounds/intro/intro2.jpg');
    imageIntro3 = loadImage('assets/images/backgrounds/intro/intro3.jpg');
    imageIntro4 = loadImage('assets/images/backgrounds/intro/intro4.png');
    imageBackGroundCity = loadImage('assets/images/backgrounds/stages/city.png');
    imageBackGroundSubway = loadImage('assets/images/backgrounds/stages/subway.png');
       
    imageBoy = loadImage('assets/images/characters/boy.png');
    
    imageZombieNormalMan = loadImage('assets/images/enemies/zombie_normal_man.png');
    imageZombieMohawk = loadImage('assets/images/enemies/zombie_mohawk.png');

    imageMainScreen = loadImage('assets/images/assets/main_menu_background.png');   
    fontMainScreen = loadFont('assets/images/assets/fonteTelaInicial.otf ');   
    imageGameOver = loadImage('assets/images/assets/game-over.png');
    imageLife = loadImage('assets/images/assets/coracao.png');
    
    imageBee = loadImage('assets/images/others/bee.png');

    imageCoin = loadImage('assets/images/items/coin.png');
    imagePotionDoubleJump = loadImage('assets/images/items/potion_blue.png');
    imagePotionInvencible = loadImage('assets/images/items/potion_yellow.png');
    imagePotionLife = loadImage('assets/images/items/potion_red.png');
    
    //SOUNDS
    soundMainScreen = loadSound('assets/sounds/background/main.mp3');
    soundIntro = loadSound('assets/sounds/background/intro.mp3')
    soundCity = loadSound('assets/sounds/background/city.mp3');
    soundGameOver = loadSound('assets/sounds/background/game_over.mp3');
   
    
    soundZombieNormalMan = loadSound('assets/sounds/fx/zombie_normal_man.mp3');;
    soundZombieMohawk = loadSound('assets/sounds/fx/zombie_mohawk.mp3');;
    soundJump = loadSound('assets/sounds/fx/jump.mp3');
    soundDeath = loadSound('assets/sounds/fx/death.mp3');
    soundCoin = loadSound('assets/sounds/fx/coin.mp3');
    soudPotionDoubleJump = loadSound('assets/sounds/fx/double_jump_potion.wav');
    soudPotionLife = loadSound('assets/sounds/fx/life_potion.flac');
    soudPotionInvencibility = loadSound('assets/sounds/fx/invencibility_potion.wav');
    
    soundWind = loadSound('assets/sounds/other/wind.mp3');

    //Json
    manipulateMapping = loadJSON('mapping.json');
}
  