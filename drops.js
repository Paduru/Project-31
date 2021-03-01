class Drops {
  constructor(Posx, Posy) {
    this.body = Bodies.circle(Posx, Posy, 2, { friction: 0 });
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    noStroke();
    fill(rgb(82, 126, 233));
    ellipseMode(RADIUS);

    ellipse(pos.x, pos.y, 2, 2);
  }
  reset() {
    if (this.body.position.y >= 500) {
      Body.setPosition(this.body, {
        x: Math.round(random(0, 500)),
        y: Math.round(random(0, 200)),
      });
    }
  }
}
