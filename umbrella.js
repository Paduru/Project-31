class Umbrella {
  constructor(x, y) {
    this.body = Bodies.circle(x, y, 100, { isStatic: true, friction: 0 });
    this.image = loadImage("images/walkingFrame/walking_1.png");
    World.add(world, this.body);
  }
  display() {
    let pos = this.body.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y + 50, 400, 400);
  }
}
