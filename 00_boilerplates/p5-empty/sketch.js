let grid = {
  numColumns: 10,
  numRows: 10,
};

let ball = {
  diameter: 10,
  color: "black",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  windowResized();
}

function draw() {
  background("white");
  let valueRadius = map(mouseX, 0, windowWidth, 1, 75);
  fill("black");
  noStroke();
  let columnWidth = windowWidth / grid.numColumns;
  let rowWidth = windowHeight / grid.numRows;
  for (let j = 0; j < grid.numRows; j++) {
    for (let i = 0; i < grid.numColumns; i++) {
      ellipse(
        columnWidth * i + columnWidth / 2,
        rowWidth * j + rowWidth / 2,
        ball.diameter,
        ball.diameter
      );
    }
  }

  ball.diameter = valueRadius;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
