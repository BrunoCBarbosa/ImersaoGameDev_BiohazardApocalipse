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
    if(!isDoubleJump){
      if(this.jumps < 1){
        this.jumpSpeed = this.jumpHeight;
        this.jumps++;
        soundJump.play(); 
      }
    }else{
      if(this.jumps < 2){
        this.jumpSpeed = this.jumpHeight;
        this.jumps++;
        soundJump.play();
        setTimeout(() => {
          isDoubleJump = false;
        }, 20000)
      }
    }
  }
  
  applyGravity(){
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;
    
    if(this.y > this.startY){
      this.y = this.startY;
      this.jumps = 0;
    }
  }

  beInvencibleByDamage(){
    if(!this.invencible){
      this.invencible = true;
      setTimeout(() => {
        this.invencible = false
      }, 1000)
    }
  }

  beInvencibleByPotion(){
    if(!this.invencible){
      this.invencible = true;
      setTimeout(() => {
        this.invencible = false;
      }, 20000)
    }else{
      this.invencible = false;
      this.invencible = true;
      setTimeout(() => {
        this.invencible = false;
      }, 20000)
    }
  }
  
  isColliding(enemy){
    if(this.invencible){
      return false;
    }

    const precision = 0.5;
    // rect( this.charX +30, 
    //   this.y + 30, 
    //   this.charWidth * precision,
    //   this.charHeight * precision,
    // )
    // rect(      enemy.charX  +40, 
    //   enemy.y +30 , 
    //   enemy.charWidth * precision,
    //   enemy.charHeight * precision)
   
    const collision = collideRectRect(
      this.charX +30, 
      this.y + 30, 
      this.charWidth * precision,
      this.charHeight * precision,
      enemy.charX  +40, 
      enemy.y +30 , 
      enemy.charWidth * precision,
      enemy.charHeight * precision
    )

    

    return collision;
  }

  isItemColliding(item){
    const precision = 0.5;
   
    const Collision = collideRectRect(
      this.charX,
      this.y,
      this.charWidth * precision,
      this.charHeight * precision,
      item.charX,
      item.y,
      item.charWidth * precision,
      item.charHeight * precision
    )

    return Collision
  }
}
