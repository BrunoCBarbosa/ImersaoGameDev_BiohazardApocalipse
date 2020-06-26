class ButtonManager{
    constructor(text, positionX, positionY){
        this.text = text;
        this.positionX = positionX;
        this.positionY = positionY;

        this.button = createButton(this.text);
        this.button.addClass(('botao-tela-inicial'));
        this.button.mousePressed(() => this._updateScene());
    }

    draw(){
        this.button.position(this.positionX, this.positionY);
        this.button.center();
    }

    _updateScene(){
        this.button.remove();
        currentScene = 'game';
    }
}