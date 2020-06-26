class Animal extends Animation{
  constructor(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, delay){
    super(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, delay);
    
    this.speed = speed;
    this.delay = delay;
  }
  
  move(){
    this.charX = this.charX - this.speed;
    
    if(this.charX < -this.charWidth){
      this.charX = width;
    }
  }
}