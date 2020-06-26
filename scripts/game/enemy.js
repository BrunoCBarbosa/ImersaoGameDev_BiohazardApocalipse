class Enemy extends Animation{
  constructor(matrix, image, zombieScream, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed){
    super(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight);
    
    this.speed = speed;
    this.zombieScream = zombieScream;
 
  }

  move(){
    this.charX = this.charX - this.speed;
    
  }

  appear(){
    this.charX = width;
  }
}