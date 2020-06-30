//global variables
let imageIntro1;
let imageIntro2;
let imageIntro3;
let imageIntro4;
let imageBackGroundCity;
let imageBackGroundSubway;
let imageMainScreen;
let imageBoy;
let imageZombieNormalMan;
let imageZombieNormalWoman;
let imageZombieMohawk;
let imageGameOver;
let imageBee;
let imageCoin;
let imagePotionDoubleJump;
let imagePotionInvencible;
let imagePotionLife;
let imageLife;

let soundMainScreen;
let soundIntro;
let soundCity;
let soundJump;
let soundDeath;
let soundWind;
let soundGameOver;
let soundCoin;
let soundZombieNormalMan;
let soundZombieMohawk;
let soudPotionDoubleJump;
let soudPotionLife;
let soudPotionInvencibility;

let buttonManager;
let fontMainScreen;

let game;
let scenario;
let boy;
let leftBee;
let score;
let isDead = false;
// let enemyIndex;
let life;
let manipulateMapping;
let next = 0;
let instructions = true;

//items
let coin;
let isDoubleJump = false;

let currentScene = 'mainScreen';
let scenes;
let mainScreen;

const matrixBoy = [
  [50,28],
  [680,28],
  [1278, 28],
  [1890, 28],
  [2500, 28],
  [3130, 28],
  [3740, 28],
  [4350, 28],
  [4965, 28],
  [5580, 28],
  [6190, 28], 
  [6800, 28],
  [7420, 36],
  [8650, 36]
];

const matrixZombieNormalMan = [
  [0, 15],
  [0, 15],
  [0, 15],
  [210, 15],
  [210, 15],
  [210, 15],
  [450, 15],
  [450, 15],
  [450, 15],
  [680, 15],
  [680, 15],
  [680, 15],
  [930, 15],
  [930, 15],
  [930, 15],
  [1200, 15],
  [1200, 15],
  [1200, 15]
];

const matrixZombieNormalWoman = [
  [0, 15],
  [0, 15],
  [0, 15],
  [260, 15],
  [260, 15],
  [260, 15],
  [500, 15],
  [500, 15],
  [500, 15],
  [735, 15],
  [735, 15],
  [735, 15],
  [1010, 15],
  [1010, 15],
  [1010, 15],
  [1300, 15],
  [1300, 15],
  [1300, 15],
]

const matrixZombieMohawk = [
  [30, 15],
  [30, 15],
  [30, 15],
  [360, 15],
  [360, 15],
  [360, 15],
  [670, 15],
  [670, 15],
  [670, 15],
  [1004, 15],
  [1004, 15],
  [1004, 15],
  [1350, 15],
  [1350, 15],
  [1350, 15],
  [1700, 15],
  [1700, 15],
  [1700, 15]
];

const matrixBeeLeft = [
  [30,235],
  [235,235]
];
const matrixCoin = [
  [0, 0],
  [0, 0],
  [0, 0],
  [150, 0],
  [150, 0],
  [150, 0],
  [300, 0],
  [300, 0],
  [300, 0],
  [450, 0],
  [450, 0],
  [450, 0],
  [600, 0],
  [600, 0],
  [600, 0]
];

const matrixPotionDoubleJump = [
  [65,65]
];

const matrixPotionLife = [
  [65,65]
];

const matrixPotionInvencible = [
  [65,65]
];