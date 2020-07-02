class Item extends Animation{
  constructor(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, delay){
  	super(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, delay);
        
    this.speed = speed;
    this.delay = delay;
    this. width + this.delay;

    this.returnScore = 0;
    this.getGoldenCoin = 100;
  }

  move(){
  	this.charX = this.charX - this.speed;

    if(this.charX < -this.charWidth - this.delay)
    	this.charX = width
        
  }

  getCoin(value){
  	return value;
  }
}