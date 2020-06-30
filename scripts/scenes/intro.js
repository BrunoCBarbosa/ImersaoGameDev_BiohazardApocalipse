class Intro{
    constructor(){
        // this.next = 0;
        this.intro = [];
    }

    setup(){
       soundMainScreen.stop();
       soundIntro.loop();
        this.buttonNext = new ButtonManager('NEXT', width/2.2, height/1.5);
        // this.buttonBegin = new ButtonManager('Begin',width/2.2, height/1.4);

        this.intro.push(imageIntro1);
        this.intro.push(imageIntro2);
        this.intro.push(imageIntro3);
        this.intro.push(imageIntro4);
        
    }

    draw(){
        this._nextButton();
        this._imageBackGround();
        this._text();
        
        
    }

    _imageBackGround(){
        image(this.intro[next], 0, 0, width, height);
    }

    _text(){
        textFont(fontMainScreen);
        textAlign(CENTER);
        textSize(50);
       
        if(next == 0){
            text("Squire City, a big and movimented metropolis,", width/2, height/4);
            text("controlled by a great pharmaceutical industry.", width/2, height/3);
        }
        if(next == 1){
            text("A day, an weird explosion ocurred in that industry,", width/2, height/4);
            text("covering all the city with a black and big smoke,", width/2, height/3);
            text("and spreading its waste, into the swears.", width/2, height/2.5);
            text("In a few hours all the citizens, start to feel bad.", width/2, height/2);
        }
        if(next == 2){
            text("Filling all the hospitals. But in in a few hours,", width/2, height/4);
            text("inexplicably, some people start to die,", width/2, height/3);
            text("but not completely, during the night, they got up.", width/2, height/2.5);
        }
        if(next == 3){
            text("Turned them into undead, eating all the citizens, and infecting them,", width/2, height/4);
            text("begining a caos, and the end of Squire City.", width/2, height/3);
            text("Now, you're the last survivor, and must escape from this terror", width/2, height/2.5);
            text("as hurry as you can.", width/2, height/2);
    
        }
       

       
    }

    _nextButton(){
        this.buttonNext.draw()
    }

}