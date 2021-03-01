const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

let engine, world;
let drops;
let person;

let bolt1, bolt2, bolt3, bolt4;

function preload() {
  bolt1 = loadImage("images/thunderbolt/1.png");
  bolt2 = loadImage("images/thunderbolt/2.png");
  bolt3 = loadImage("images/thunderbolt/3.png");
  bolt4 = loadImage("images/thunderbolt/4.png");
}

function setup() {
  createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  var maxDrops = 100;
  drops = [];

  for (let i = 0; i < maxDrops; i++) {
    drops.push(
      new Drops(Math.round(random(0, 500)), Math.round(random(0, 200)))
    );
  }

  person = new Umbrella(250, 275);
}

function draw() {
  Engine.update(engine);

  background(0, 0, 0);

  for (let i = 0; i < drops.length; i++) {
    drops[i].reset();
    drops[i].display();
  }

  createThunder(Math.round(random(1, 4)));

  person.display();

  drawSprites();
}

function createThunder(rand) {
  if (frameCount % 80 === 0) {
    let thunder = createSprite(
      Math.round(random(50, 450)),
      Math.round(random(10, 30)),
      50,
      50
    );
    thunder.life = 10;
    switch (rand) {
      case 1:
        thunder.addImage(bolt1);
        break;
      case 2:
        thunder.addImage(bolt2);
        break;
      case 3:
        thunder.addImage(bolt3);
        break;
      case 4:
        thunder.addImage(bolt4);
        break;
      default:
        break;
    }
    thunder.scale = random(0.2, 0.4);
  }
}
