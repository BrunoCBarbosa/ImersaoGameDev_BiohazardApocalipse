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
            this.button.mousePressed(() => this._startGame());
        }

        if(currentScene === 'game'){
            this.button.mousePressed(() => this._restartStage());
        }

        // else{
            
        //     this.button.mousePressed(() => this._restartStage());
        // }
    }

    setup(){
        //instantiate class game and load setup from class game
        mainScreen = new MainScreen();
        game = new Game();

        intro = new Intro();
  
    }

    draw(){
        this.button.position(this.positionX, this.positionY);
        // this.button.center();
    }

    _goIntro(){
        this.button.remove();
        currentScene = 'intro';
        intro.setup(); 

    }
 
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