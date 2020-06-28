class Potion extends Animation{
    constructor(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed, type){
        super(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight, speed);
        
        this.speed = speed;
        this. width + this.delay;
        this.type = type;

    }

    move(){
        this.charX = this.charX - this.speed;

        if(this.charX < -this.charWidth - this.delay){
            this.charX = width
        }
    }

    appear(){
        this.charX = width;
      }
}