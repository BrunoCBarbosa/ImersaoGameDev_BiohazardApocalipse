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
  [50,36],
  [660,36],
  [1270, 36],
  [1870, 36],
  [2480, 36],
  [3110, 36],
  [3740, 36],
  [4350, 36],
  [4965, 36],
  [5580, 36],
  [6190, 36], 
  [6800, 36],
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
]

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