class Animation{
  constructor(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight){
    this.matrix = matrix;
    this.image = image;
    this.charWidth = charWidth;
    this.charHeight = charHeight;
    this.charX = charX; 
    this.charY = charY;
    this.y = height - this.charHeight - this.charY;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight; 
    
    this.currentFrame = 0;  
  }
  
  show(){
    //Function to load the character      
    image(
      this.image, 
      this.charX, 
      this.y, 
      this.charWidth,
      this.charHeight,
      this.matrix[this.currentFrame][0], 
      this.matrix[this.currentFrame][1], 
      this.spriteWidth, 
      this.spriteHeight
    )
    this.animation();
  }
  
  animation(){
    this.currentFrame++;

    if(this.currentFrame > this.matrix.length - 1){
      this.currentFrame = 0;
    }
  }
}