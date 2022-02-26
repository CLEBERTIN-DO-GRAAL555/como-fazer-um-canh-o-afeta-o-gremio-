class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image=loadImage("assets/canon.png");
    this.cannon_base=loadImage("assets/cannonBase.png");


  }
  display(){
    push();
    // muda o eixo principal ao invés da tela para o eixo do corpo
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image,0,0,this.width,this.height);
    pop();
    image(this.cannon_base,70,25,200,200)
  }
  
  
}
