class ButtonManager{
  constructor(text, positionX, positionY){
    this.text = text;
    this.positionX = positionX;
    this.positionY = positionY;
		
		this.button = createButton(this.text);
    this.button.addClass(('botao-tela-inicial'));
    
    if(currentScene === 'mainScreen'){
      this.button.mousePressed(() => this._goIntro());
    }
		
		if(currentScene === 'intro'){
      this.button.mousePressed(() => this._nextIntro());
    }
    
    if(currentScene === 'game'){
      this.button.mousePressed(() => this._restartStage());
    }
	}
		
  draw(){
  	this.button.position(this.positionX, this.positionY);
  }

  _goIntro(){
  	this.button.remove();
    currentScene = 'intro';
    intro.setup(); 
  }

  _nextIntro(){
  	next++;
	
    if(next == 4){
    	this._startGame()
    }
	}
	
	// createBeginButton(){
	// 	this.button = createButton('BEGIN');
	// 	this.button.addClass(('botao-tela-inicial'));	
	// 	this.button = this.positionX;
	// 	this.button = this.positionY;
	// }
 
  _startGame(){
    this.button.remove();
    currentScene = 'game';
    game.setup(); 
  }

  _mainScreen(){
  	window.location.reload();
  }

  _restartStage(){
  	this.button.remove();
    game.restart();
  }
}