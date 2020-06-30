class Game{
  constructor(){
      this.objectIndex = 0;
      this.objectMapped;
      this.mapping = manipulateMapping.mapping

      this.objectMappedArray = []
  }
  
  setup(){
     //Charge the game sound
      soundIntro.stop();
      soundCity.loop()
      //instantiate a new Scenario to scenario
      scenario = new Scenario(imageBackGroundCity, 3);

      //instantiate a new Score to score
      score = new Score();

      //instantiates
      boy = new Character(matrixBoy, imageBoy, 50, 30, 110, 150, 300, 465);
 
      leftBee = new Animal(matrixBeeLeft, imageBee, width -52, 500, 10, 20, 150, 150, 5, 500);

      coin = new Item(matrixCoin, imageCoin, width, 200, 50, 50, 150, 150, 5, 2000);
      const potionDoubleJump = new Potion(matrixPotionDoubleJump, imagePotionDoubleJump, width, 200, 40, 40, 300, 350, 5, 'doubleJump');
      const potionLife = new Potion(matrixPotionLife, imagePotionLife, width, 200, 40, 40, 300, 350, 5, 'life');
      const potionInvencible = new Potion(matrixPotionInvencible, imagePotionInvencible, width, 200, 40, 40, 300, 350, 5, 'invencibility');
    
      //enemies 
      const zombieNormalMan = new Enemy(matrixZombieNormalMan, imageZombieNormalMan, soundZombieNormalMan, width, 30, 110, 150, 250, 465, 9, 'enemy');
      const zombieMohawk = new Enemy(matrixZombieMohawk, imageZombieMohawk, soundZombieMohawk, width, 30, 110, 150, 330, 465, 15, 'enemy');
      
      this.objectMappedArray.push(zombieNormalMan);
      this.objectMappedArray.push(zombieMohawk);
      this.objectMappedArray.push(potionDoubleJump);
      this.objectMappedArray.push(potionLife);
      this.objectMappedArray.push(potionInvencible);

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
    leftBee.move();

     
    if(instructions){
      this.instruction();
    }
    

    //call items method
    coin.show();
    coin.move();

    // call object methods
    const currentLine = this.mapping[this.objectIndex];
    this.objectMapped  = this.objectMappedArray[currentLine.object];
    const visibleObject = this.objectMapped.charX  < -this.objectMapped.charWidth;
    
    this.objectMapped.speed = currentLine.objectSpeed;
    this.objectMapped.show();
    this.objectMapped.move();
   
    if(visibleObject){
      this.objectIndex++;
   
      this.objectMapped.appear();
   
      if(this.objectIndex > this.mapping.length - 1){
        this.objectIndex = 0;
      }
    }
    if(this.objectMappedArray[currentLine.object].type === 'enemy' ){
    
      //collide if an enemy
      if(boy.isColliding(this.objectMapped)){
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
    }//collide if doubleJump
    else if(this.objectMappedArray[currentLine.object].type === 'doubleJump'){
      
      if(boy.isItemColliding(this.objectMapped)){
        isDoubleJump = true;
        soudPotionDoubleJump.play();
        this.objectMapped.charX = -10*this.objectMapped.charHeight;
      }

    }//collide if life
    else if(this.objectMappedArray[currentLine.object].type === 'life'){
      if(boy.isItemColliding(this.objectMapped)){
        life.lifeUp();
        soudPotionLife.play();
        this.objectMapped.charX = -10*this.objectMapped.charHeight;
      }
    }//collide if an invencibility
    else{
      if(boy.isItemColliding(this.objectMapped)){
        boy.beInvencibleByPotion();
        soudPotionInvencibility.play();
        this.objectMapped.charX = -10*this.objectMapped.charHeight;
      }
    }

    if(boy.isItemColliding(coin)){
      score.addCoinScore()
      soundCoin.play();
      coin.charX = -10*coin.charHeight;
    }
  }

  _button(){
    this.restartButton = new ButtonManager('Restart', width/2.2, height/2);
    this.restartButton.draw();
  }

  _startButton(){
    this.beginButton = new ButtonManager('Begin', width/2.2, height/1.5);
    this.beginButton.draw();
  }

  instruction(){
    noLoop();
    this._textInstruction();
    this._startButton();
  }

  _textInstruction(){
    textFont(fontMainScreen);
    textAlign(CENTER);
    textSize(100);
    text("Instructions:", width/2, height/4);
    textSize(50);
    text("Jump: Button Up", width/2, height/3);
    text("Blue Potion: Double Jump", width/2, height/2.5);
    text("Red Potion: Life Up", width/2, height/2);
    text("Yellow Potion: Invencibility", width/2, height/1.7);
  }

  restart(){
    isDead = false
    score.score = 0;
    life.lifes = 3
    soundGameOver.stop();
    soundCity.loop();
    boy.y  = height - boy.charHeight - boy.charY;
    this.objectMapped.charX = -10*this.objectMapped.charHeight;
    coin.charX = -10*coin.charHeight;
    this.objectIndex = 0
    loop();
  }
}