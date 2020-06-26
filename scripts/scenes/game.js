class Game{
  constructor(){
      currentEnemy = 0;
  }
  setup(){
     //Charge the game sound
      soundMainScreen.stop();
      soundCity.loop()
      //instantiate a new Scenario to scenario
      scenario = new Scenario(imageBackGroundCity, 3);

      //instantiate a new Score to score
      score = new Score();

      //instantiate the character
      boy = new Character(matrixBoy, imageBoy, 50, 30, 110, 150, 300, 465);
 
      leftBee = new Animal(matrixBeeLeft, imageBee, width -52, 500, 10, 20, 150, 150, 5, 500);
      coin = new Item(matrixCoin, imageCoin, width, 200, 50, 50, 150, 150, 5, 2000);
    
      //enemies 
      const zombieNormalMan = new Enemy(matrixZombieNormalMan, imageZombieNormalMan, soundZombieNormalMan, width, 30, 110, 150, 250, 465, 9, 100);
      const zombieMohawk = new Enemy(matrixZombieMohawk, imageZombieMohawk, soundZombieMohawk, width, 30, 110, 150, 330, 465, 15, 100);
      
      enemies.push(zombieNormalMan);
      enemies.push(zombieMohawk);

  }
  
  keyPressed(key){
    if(key === 'ArrowUp'){
        boy.jump();
    }

    // if(isDead && keyCode==ENTER){
    //   isDead = false
    //   restart();
    //   loop();
    // }
  }
  
  draw(){
    //call scenario methods
    scenario.show();
    scenario.move();
    //call score methods
    score.show();
    score.addScore();
        
    //call characters methods
    boy.show();
    boy.applyGravity();
        
    //call animal methods
    leftBee.show();
    leftBee.move()
        
    // call enemy methods
    const enemy = enemies[currentEnemy];
    const visibleEnemy = enemy.charX < -enemy.charWidth;
        
    enemy.show();
    enemy.move();
    
    if(visibleEnemy){
      currentEnemy++;
   
      if(currentEnemy > 1){
        currentEnemy = 0;
      }
      // enemy.speed = parseInt(random(10,20));
      
    }
    
    if(boy.isColliding(enemy)){
      soundDeath.play();
      soundCity.stop();
      // soundWind.stop();
      soundGameOver.loop();
      isDead = true;
      image(imageGameOver, width/2 - 200, height/3);
      this._button();
      noLoop();
    }

    //call coin method
    coin.show();
    coin.move();

    if(boy.isItemColliding(coin)){
      score.addCoinScore()
      soundCoin.play();
    }

  }

  _button(){
  
    this.restartButton = new ButtonManager('Restart', width/2.2, height/2);
      
    this.restartButton.draw();
  }
}