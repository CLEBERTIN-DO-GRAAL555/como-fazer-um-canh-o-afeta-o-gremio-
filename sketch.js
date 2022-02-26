const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
//variavel do fundo
var  backgroundImg;
var cannon



var canvas, angle, tower, ground, cannon;

function preload() {
  //carregando as imagens da torre e do fundo para o codigo
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  //configuraçoes do chão
  var options = {
    isStatic: true
  }
//chão retangular para os barquinhos n cairem
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);
//carregando imagem da torre corpo

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  cannon=new Cannon(180,120,130,100,angle)

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  //mostrando a forma do chão
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

//colocando a imagem no corpo
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop(); 
  cannon.display() ;
}
