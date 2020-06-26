class Intro{
    constructor(){
        // this.next = 0;
        // this.intro = [];
    }

    setup(){
       
        // this.buttonNext = new ButtonManager('Próximo', width/2, height/2);
        this.buttonBegin = new ButtonManager('Begin',width/2.2, height/1.4);

        // this.intro.push(imageIntro1);
        // this.intro.push(imageIntro2);
        // this.intro.push(imageIntro3);
        // this.intro.push(imageIntro4);
        
    }

    draw(){
        // if(this.next < 4){
        //     this._imageBackGround();
        //     this._nextButton();
        // }else{
        this._imageBackGround();
        this._beginButton()
        this._text();
        // }
    }

    _imageBackGround(){
        image(imageIntro4, 0, 0, width, height);
    }

    _text(){
        textFont(fontMainScreen);
        textAlign(CENTER);
        textSize(50);
        text("Squire City, a giant metropolis ", width/2, height/4);
        text("controlled by a great pharmaceutical industry, ", width/2, height/3);
        text("a day an explosion ocurred, infecting all citizens,", width/2, height/2.4);
        text("turned them into undead, and devasting it.", width/2, height/2);
        text("Now, you're the last survivor, and must escape from this terror", width/2, height/1.7);
        text("as hurry as you can.", width/2, height/1.5);


       
    }

    // _nextButton(){
    //     this.buttonNext.draw()
    // }

    _beginButton(){
        // this.buttonBegin.positionY =  height / 1 ;
        this.buttonBegin.draw();
    }
}