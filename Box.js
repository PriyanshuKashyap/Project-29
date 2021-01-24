class Box extends BaseClass {
  constructor(x, y, width, height, color){
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0,
      'isStatic': true
    }
    super(x, y, width, height, 0);
    this.color = color;
    //this.image = loadImage("sprites/wood1.png");
  }

  display() {
    fill(this.color);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }

};
