var planes = [];

function setup() {
	let thecanvas = createCanvas(600, 500);
	//thecanvas.position(0, 0);
  colorMode(HSB, 360, 100, 100, 1);
  var numPlanes = 12;
  for (var i = 0; i < numPlanes; i++) {
    planes[i] = new PaperPlane({
      color: randomPastel(), 
      size: 10, 
      direction: new Direction(i*i),
      trail: new Trail()
    });
  }
}

function draw() {
  background(255);
  planes.forEach(function(plane) {
    plane.move();
    plane.drawTrail();
    plane.draw();
  })
}

function randomPastel() {
  return color(random(360), 20, 100, 1);
}

var Direction = function(seed) {
  this.seed = seed;
  this.noiseScale = 0.0;
};

Direction.prototype.move = function() {
  return createVector(-300, this.vertical());
};

Direction.prototype.vertical = function() {
  noiseSeed(this.seed);
  this.noiseScale += random() * 0.01;
  return map(noise(this.noiseScale), 0, 1, 0 - height, height * 2);
};

var Trail = function() {
  this.positions = []
};

Trail.prototype.add = function(position) {
  if (frameCount % 6 == 0) {
    this.positions.unshift(createVector(position.x, position.y));
  }
};

Trail.prototype.draw = function() {
  noStroke();
  this.positions.forEach(function(position, i) {
    fill(color(0, 0, 75, 1/i));
    ellipse(position.x, position.y, 6, 6);
  })
};

Trail.prototype.clear = function() {
  this.positions = [];
};

var PaperPlane = function(options) {
  this.color = options.color;
  this.size = options.size;
  this.direction = options.direction;
  this.trail = options.trail;
  this.position = createVector(width + random(width), random(height));
  this.rotation = atan2(this.position.y - mouseY, this.position.x - mouseX);
  this.speed = random() * 5 + 3;
};

PaperPlane.prototype.move = function() {
  var direction = this.direction.move();
  this.rotation = atan2(this.position.y - direction.y, this.position.x - direction.x);
  this.position.sub(p5.Vector.fromAngle(this.rotation).mult(this.speed));
  if (this.position.x < -250) {
    this.reset();
  }
};

PaperPlane.prototype.draw = function() {
  strokeWeight(2 / this.size);
  strokeJoin(ROUND);
  stroke("#333333")
  fill(this.color);
  push();
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    scale(this.size);
    this.drawShape({
      front: createVector(-15, 0),
      back: createVector(2, 1),
      bottomWingTip: createVector(3, 5),
      bottomWingFold: createVector(0, 0),
      topWingTip: createVector(2, -6),
      topWingFold: createVector(0, -1)
    });
  pop();
  this.trail.add(this.position);
};

PaperPlane.prototype.drawShape = function(corners) {
  this.drawComponent([corners.front, corners.topWingFold, corners.back], this.shadedColor());
  this.drawComponent([corners.front, corners.bottomWingFold, corners.back]);
  this.drawComponent([corners.front, corners.topWingFold, corners.topWingTip]);
  this.drawComponent([corners.front, corners.bottomWingFold, corners.bottomWingTip]);
};

PaperPlane.prototype.drawComponent = function(corners, color = this.color) {
  fill(color);
  beginShape();
    corners.forEach(function(corner) {
      vertex(corner.x, corner.y)
    });
  endShape(CLOSE);
};

PaperPlane.prototype.drawTrail = function(position, counter) {
  this.trail.draw();
};

PaperPlane.prototype.reset = function() {
  this.color = randomPastel();
  this.position = createVector(width + 200, random(height));
  this.speed = random() * 5 + 3;
  this.trail.clear();
};

PaperPlane.prototype.shadedColor = function() {
  return color(hue(this.color), saturation(this.color) + 10, brightness(this.color) - 7, alpha(this.color));
};