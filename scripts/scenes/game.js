class Game{
  constructor(){
      enemyIndex = 0;
      this.mapping = manipulateMapping.mapping
  }
  
  setup(){
     //Charge the game sound
      soundIntro.stop();
      //soundCity.loop()
      //instantiate a new Scenario to scenario
      scenario = new Scenario(imageBackGroundCity, 3);

      //instantiate a new Score to score
      score = new Score();

      //instantiates
      boy = new Character(matrixBoy, imageBoy, 50, 30, 110, 150, 300, 465);
 
      leftBee = new Animal(matrixBeeLeft, imageBee, width -52, 500, 10, 20, 150, 150, 5, 500);

      coin = new Item(matrixCoin, imageCoin, width, 200, 50, 50, 150, 150, 5, 2000);
      potionDoubleJump = new Item(matrixPotionDoubleJump, imagePotionDoubleJump, width, 200, 40, 40, 300, 350, 5, 2000);
      potionLife = new Item(matrixPotionLife, imagePotionLife, width, 200, 40, 40, 300, 350, 5, 2000);
      potionInvencible = new Item(matrixPotionInvencible, imagePotionInvencible, width, 200, 40, 40, 300, 350, 5, 2000);
    
      //enemies 
      const zombieNormalMan = new Enemy(matrixZombieNormalMan, imageZombieNormalMan, soundZombieNormalMan, width, 30, 110, 150, 250, 465, 9);
      const zombieMohawk = new Enemy(matrixZombieMohawk, imageZombieMohawk, soundZombieMohawk, width, 30, 110, 150, 330, 465, 15);
      
      enemies.push(zombieNormalMan);
      enemies.push(zombieMohawk);

      // //instantiate life
      life = new Life(manipulateMapping.characterSettings.maximumLife, manipulateMapping.characterSettings.startLife);

  }
  
  keyPressed(key){
    if(key === 'ArrowUp'){
        boy.jump();
    }
  }
  
  draw(){
    //call scenario methods
    scenario.show();
    scenario.move();

    //call life methods
    life.draw();

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
    const currentLine = this.mapping[enemyIndex];
    const enemy = enemies[currentLine.enemy];
    const visibleEnemy = enemy.charX  < -enemy.charWidth;
    
    enemy.speed = currentLine.enemySpeed;
    enemy.show();
    enemy.move();
      
    if(visibleEnemy){
      enemyIndex++;
 
      enemy.appear();
   
      if(enemyIndex > this.mapping.length - 1){
        enemyIndex = 0;
      }
    }
    
    if(boy.isColliding(enemy)){
      life.looseLife();   
      boy.beInvencibleByDamage();
      soundDeath.play();
        
      //game over
      if(life.lifes === 0){
        soundCity.stop();
        soundWind.stop();
        soundGameOver.loop();
        
        isDead = true;
        
        image(imageGameOver, width/2 - 200, height/3);
        
        this._button();
        
        noLoop();
      }
    }

    //call itemn method
    //coin.show();
    //coin.move();

    // potionDoubleJump.show();
    // potionDoubleJump.move();

    // potionLife.show()
    // potionLife.move()

    potionInvencible.show()
    potionInvencible.move()

    if(boy.isItemColliding(coin)){
      score.addCoinScore()
      soundCoin.play();
      coin.charX = -10*coin.charHeight;
    }

    if(boy.isItemColliding(potionDoubleJump)){
      isDoubleJump = true;
      soundCoin.play();
      potionDoubleJump.charX = -10*potionDoubleJump.charHeight;
    }

    if(boy.isItemColliding(potionLife)){
      life.lifeUp();
      soundCoin.play();
      potionLife.charX = -10*potionLife.charHeight;
    }

    if(boy.isItemColliding(potionInvencible)){
      boy.beInvencibleByPotion();
      soundCoin.play();
      potionInvencible.charX = -10*potionInvencible.charHeight;
    }

  }

  _button(){
    this.restartButton = new ButtonManager('Restart', width/2.2, height/2);
    this.restartButton.draw();
  }
}