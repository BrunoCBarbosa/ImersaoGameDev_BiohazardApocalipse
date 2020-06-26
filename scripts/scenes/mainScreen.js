class MainScreen{
    constructor(){

    }

    setup(){
        soundMainScreen.loop()
    }

    draw(){
        this._imageBackground();
        this._text();
        this._button();
    }

    _imageBackground(){
        image(imageMainScreen, 0, 0, width, height);
    }

    _text(){
        textFont(fontMainScreen);
        textAlign(CENTER);
        textSize(100);
        text("Biohazard", width/2, height/4);
        textSize(50);
        text("Apocalipse", width/2, height/3.5);
    }

    _button(){
        
        buttonManager.draw();
    }
}