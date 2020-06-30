class MainScreen{
    
    constructor(){
        this.Option = 'mainScreen'
    }

    setup(){
        // soundMainScreen.loop()
    }

    draw(){
        this._imageBackground();
        this._textTitle();
        this._buttonStart();
    }

    _imageBackground(){
        image(imageMainScreen, 0, 0, width, height);
    }

    _textTitle(){
        textFont(fontMainScreen);
        textAlign(CENTER);
        textSize(100);
        text("Biohazard", width/2, height/4);
        textSize(50);
        text("Apocalipse", width/2, height/3.5);
    }

    _textInstructions(){
        textFont(fontMainScreen);
        textAlign(CENTER);
        textSize(100);
        text("Instructions", width/2, height/4);
    }

    _buttonStart(){
        buttonManager.draw();
    }

}