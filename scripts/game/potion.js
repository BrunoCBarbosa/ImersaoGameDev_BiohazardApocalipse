class Potion{
  constructor(speed, type){
    
  	this.charX = width;
  	this.charY = 200;
		this.charWidth = 40;
		this.charHeight = 40;
		this.y = height - this.charHeight - this.charY;
  	this.speed = speed;
		this.type = type;
		
    switch(this.type){
			case "doubleJump":
				this.imagePotion = loadImage('assets/images/items/potion_blue.png');
			break;
			case "life":
				this.imagePotion = loadImage('assets/images/items/potion_red.png');
			break;
			case "invencibility":
				this.imagePotion = loadImage('assets/images/items/potion_yellow.png');
			break;
			default: console.log("not found type")
		}
	}

	show(){
		image(this.imagePotion, this.charX, this.y, this.charWidth, this.charHeight);
	}
	
  move(){
    this.charX = this.charX - this.speed;
	}
	
  appear(){
    this.charX = width;
  }
}