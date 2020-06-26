class Life{
    constructor(maximumLife, startLife){
        this.maximumLife = maximumLife;
        this.startLife = startLife;

        this.lifes = this.startLife;

        this.width = 25;
        this.heigth = 25;

        this.startX = 20;
        this.y = 20
    }

    draw(){
        for(let i = 0; i < this.lifes; i++){
            const margin = i * 10;
            const position = this.startX * (i + 1); 

            image(imageLife, position + margin, this.y, this.width, this.heigth);
        } 
    }

    earnLife(){
        if(this.lifes < this.maximumLife){
            this.lifes++;
        }
    }

    looseLife(){
        this.lifes--;
    }
}