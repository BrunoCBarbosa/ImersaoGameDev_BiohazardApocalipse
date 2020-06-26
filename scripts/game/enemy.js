class Enemy extends Animation{
  constructor(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, delay){
    super(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, delay);
    
    this.speed = speed;
    this.delay = delay;
    this.charX = width + this.delay;
   
  }
  
  move(){
    this.charX = this.charX - this.speed;
    
    if(this.charX < -this.charWidth - this.delay){
      this.charX = width;
      
    }
  }
}