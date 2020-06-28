class Enemy extends Animation{
  constructor(matrix, image, zombieScream, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, type){
    super(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight);
    
    this.speed = speed;
    this.zombieScream = zombieScream;
    this.type = type;
 
  }

  move(){
    this.charX = this.charX - this.speed;
    
  }

  appear(){
    this.charX = width;
  }
}