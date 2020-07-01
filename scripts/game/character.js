class Character extends Animation{
  constructor(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight){
    super(matrix, image, charX, charY, charWidth, charHeight, spriteWidth, spriteHeight);
    
    this.charY = charY;
    this.startY = height - this.charHeight - this.charY;
    this.y = this.startY;
    
    this.jumps = 0;
    this.jumpSpeed = 0;
    this.jumpHeight = -40
    
    this.gravity = 4;
    this.invencible = false;
    
  }
  
  jump(){
    switch(isDoubleJump){
      case true:
        if(this.jumps < 2){
          this._jumpCounter();
       
          setTimeout(() => {
            isDoubleJump = false;
          }, 10000)
        }
      break;
      case false:
        if(this.jumps < 1){
          this._jumpCounter();
         }
      break;
      default: console.log("Invalid value to isDpubleJump");
    }
  }

  _jumpCounter(){
    this.jumpSpeed = this.jumpHeight;
    this.jumps++;
    playFx(soundJump); 
  }
  
  applyGravity(){
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;
    
    if(this.y > this.startY){
      this.y = this.startY;
      this.jumps = 0;
    }
  }

  beInvencible(time){
    this.invencible = true;
      
    setTimeout(() => {
      this.invencible = false;
    }, time)
  }

  isColliding(isEnemy, target, precision, sumHeroCharX, sumHeroY, sumTargetCharX, sumTargetY){
    if(isEnemy && this.invencible){
      return false;
    }
  
    const collision = this._doCollisionRectRect(target, precision, sumHeroCharX, sumHeroY, sumTargetCharX, sumTargetY)

    return collision;
  }

  _doCollisionRectRect(target, precision, sumHeroCharX, sumHeroY, sumTargetCharX, sumTargetY){
    return collideRectRect(
      this.charX + sumHeroCharX, 
      this.y + sumHeroY, 
      this.charWidth * precision,
      this.charHeight * precision,
      target.charX  + sumTargetCharX, 
      target.y + sumTargetY , 
      target.charWidth * precision,
      target.charHeight * precision
    )
  }
}
