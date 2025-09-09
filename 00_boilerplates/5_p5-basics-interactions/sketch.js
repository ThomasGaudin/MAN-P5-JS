const grid = {
  x: 10,
  y: 10,
};
const circle = {
  diameter: 100,
  color: "black",
};

const allCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  initCircle();
}

function initCircle() {
  let sizeCell = {
    x: windowWidth / grid.x,
    y: windowHeight / grid.y,
  };
  let margin = {
    x: sizeCell.x - circle.diameter,
    y: sizeCell.y - circle.diameter,
  };
  for (let j = 0; j < grid.y; j++) {
    for (let i = 0; i < grid.x; i++) {
      let position = {
        x: sizeCell.x * i + circle.diameter / 2 + margin.x / 2,
        y: sizeCell.y * j + circle.diameter / 2 + margin.y / 2,
      };

      let instanceCircle = new Circle(position, circle.diameter, circle.color);

      instanceCircle.setup();
      allCircles.push(instanceCircle);
      console.log(allCircles);
    }
  }
}

function mousePressed() {
  let isOverBall = false;
  for (let i = 0; i < allCircles.length; i++) {
    const pos = allCircles[i].getPosition();
    if (dist(mouseX, mouseY, pos.x, pos.y) < circle.diameter / 2) {
      isOverBall = true;
      allCircles.splice(i, 1);
    }
  }
  if (!isOverBall) {
    console.log("not over ball");
    addCircle();
  }
}

function addCircle() {
  const instanceCircle = new Circle(
    { x: mouseX, y: mouseY },
    circle.diameter,
    "rgb(0,255,0)"
  );
  instanceCircle.setup();
  allCircles.push(instanceCircle);
}

function draw() {
  background("rgba(250, 250, 250,0.02)");
  noStroke();
  /*********
	Create a line of nColumns balls
	*************/
  // Calculate the position of the ball

  // Adding another level of loop to create a grid

  for (let i = 0; i < allCircles.length; i++) {
    allCircles[i].update();
    allCircles[i].draw();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
