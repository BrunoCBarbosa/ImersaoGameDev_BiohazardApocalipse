class Score {
  constructor(){
    this.score = 0;

    this.goldenCoin = new Item();
  }
  
  show(){
    textAlign(RIGHT);
    this._text();
  }

  _text(){
    textSize(50)
    text("Score: ", width - 110, 50)
    textSize(50);
    fill('#FFF');
    text(parseInt(this.score), width - 30, 50);
  }
  
  addScore(){
    this.score += 0.2;
  }

  addCoinScore(){
    this.score += this.goldenCoin.getCoin(100)
  }
}