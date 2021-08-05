class Snow{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': false
        }
     
        this.x = x;
        this.y = y;
        this.r = 50;
        this.image=loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }

    updateY() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {x:random(0,1600), y:random(0,300)})
        }
    }

    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);

 
    
    }
}