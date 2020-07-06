class Paper{
    constructor(x,y,r){
var option={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body = Bodies.circle(x, y, r, option);
this.r = r;
World.add(world, this.body);
    
}
display(){
 push();
 translate(this.body.position.x, this.body.position.y)
 fill(255);
 ellipse(0,0,this.r,this.r)
 this.image = loadImage("paper.png");
 pop();
}
}