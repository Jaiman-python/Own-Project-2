class Player{

    constructor(){
        this.gender = null
        this.name = null
        this.Sprite = createSprite(500,500,43,49);
        this.ImageBoy = loadImage("Images/boy.png");
        this.ImageBoy = loadImage("Images/Girl.png");
    }
    display(){
        if(this.gender == "Boy"){
            this.Sprite.addImage(this.ImageBoy);
        }

        else if(this.gender == "Girl"){
            this.Sprite.addImage(this.ImageBoy);
        }
        
        this.Sprite.x = mouseX;
        this.Sprite.y = mouseY;

    }




}