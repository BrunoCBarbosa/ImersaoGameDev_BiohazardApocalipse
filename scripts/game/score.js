class Score {
  constructor(){
    this.score = 0;

    this.goldenCoin = new Item();
  }
  
  show(){
    textAlign(RIGHT);
    fill('#FFF');
    textSize(50);
    text(parseInt(this.score), width - 30, 50);
  }
  
  addScore(){
    this.score += 0.2;
  }

  addCoinScore(){
    this.score += this.goldenCoin.getCoin(100)
  }
}