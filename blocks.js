class Blocks{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
       this.corona = loadImage("go corona.jpg");
        this.corona2 = loadImage("corona.jpg");
      }
      display(){
        if(this.body.speed<3)
  { imageMode(CENTER);
    image(this.corona2,this.body.position.x,this.body.position.y,30,40);
    
  }else{
          push();
          World.remove(world,this.body);
          this.Visibility -= 5;
          tint(255,this.Visibility);
          image(this.corona2,this.body.position.x,this.body.position.y,30,40);
          pop();
        }
      }
  }