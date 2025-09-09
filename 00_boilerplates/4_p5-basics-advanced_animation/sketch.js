const grid = {
  x: 10,
  y: 10,
};

const allCircles = [];

function setup() {
  initBalls();
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
}

function initBalls() {
  for (let j = 0; j < grid.y; j++) {
    for (let i = 0; i < grid.x; i++) {
      const positionBall = {
        x: (windowWidth / grid.x) * i + windowWidth / grid.x / 2,
        y: (windowHeight / grid.y) * j + windowHeight / grid.y / 2,
      };

      const hue = i * (j * 4);
      const circle = {
        x: i,
        y: j,
        hue: hue,
        luminosity: 30,
        color: null,
        position: { x: positionBall.x, y: positionBall.y },
        velocity: { x: random(-1, 1), y: random(-1, 1) },
        diameter: random(1, 20),
      };
      allCircles.push(circle);
    }
  }
}

function draw() {
  noStroke();
  // background("rgba(255,255,255,0.1)");
  noStroke();

  for (let i = 0; i < allCircles.length; i++) {
    fill("hsl(" + allCircles[i].hue + ",100%, 50%)");

    allCircles[i].position.x =
      allCircles[i].position.x + allCircles[i].velocity.x;
    allCircles[i].position.y =
      allCircles[i].position.y + allCircles[i].velocity.y;
    if (
      allCircles[i].position.x >= windowWidth - allCircles[i].diameter / 2 ||
      allCircles[i].position.x <= allCircles[i].diameter / 2
    ) {
      allCircles[i].velocity.x = -allCircles[i].velocity.x;
      allCircles[i].velocity.x = allCircles[i].velocity.x;
      allCircles[i].luminosity += 5;
    }
    if (
      allCircles[i].position.y >= windowHeight - allCircles[i].diameter / 2 ||
      allCircles[i].position.y <= allCircles[i].diameter / 2
    ) {
      allCircles[i].velocity.y = -allCircles[i].velocity.y;
      allCircles[i].velocity.y = allCircles[i].velocity.y;
      allCircles[i].luminosity += 5;
    }
    circle(
      allCircles[i].position.x,
      allCircles[i].position.y,
      allCircles[i].diameter
    );
  }
}

function keyPressed(ev) {
  if (ev.keyCode == 37) {
    for (let i = 0; i < allCircles.length; i++) {
      allCircles[i].hue = allCircles[i].hue - 20;
      if (allCircles[i].hue <= 0) {
        allCircles[i].hue = 360;
      }
    }
  }

  if (ev.keyCode == 38) {
    for (let i = 0; i < allCircles.length; i++) {
      if (allCircles[i].diameter < 100) {
        allCircles[i].diameter = allCircles[i].diameter + 10;
      }
    }
  }

  if (ev.keyCode == 40) {
    for (let i = 0; i < allCircles.length; i++) {
      if (allCircles[i].diameter > 10) {
        allCircles[i].diameter = allCircles[i].diameter - 10;
      }
    }
  }

  if (ev.keyCode == 39) {
    for (let i = 0; i < allCircles.length; i++) {
      allCircles[i].hue = allCircles[i].hue + 20;
      if (allCircles[i].hue > 360) {
        allCircles[i].hue = 0;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
