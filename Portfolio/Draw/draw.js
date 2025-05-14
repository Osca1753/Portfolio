function preload() {
  //picture
  img = loadImage("/Draw/Pictures/Ski.png");
}

function setup() {
  //HUE
  colorMode(HSL)

  //canvas
  canvasX = windowWidth;
  canvasY = windowHeight-150;
  createCanvas(canvasX, canvasY);

  //sliders
  slider_H = createSlider(0,360,180);
  slider_H.size(canvasX);

  slider_S = createSlider(0,100,100);
  slider_S.size(canvasX);

  slider_L = createSlider(0,100,50);
  slider_L.size(canvasX);

  slider_s = createSlider(1,25,5);
  slider_s.size(canvasX);

  //background and image
  background(0,0,100);
  image(img,(canvasX-img.width)/2,(canvasY-img.height)/2);
}

function draw() {
  stroke(0,0,100)
  rect((canvasX+img.width)/2,0,(canvasX-img.width)/2,canvasY)
  rect(0,0,(canvasX-img.width)/2,canvasY)
  strokeWeight(slider_s.value());
  stroke(slider_H.value(),slider_S.value(),slider_L.value());
  circle(canvasX/6,canvasY/2,slider_s.value())
}

function mouseClicked() {
  //dot
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseDragged() {
  //line
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function save() {
  //save
  saveCanvas();
}

function CLEAR() {
  //clear
  clear();
  image(img,(canvasX-img.width)/2,(canvasY-img.height)/2);
}

function pick() {
  //pick
  function mouseClicked() {
    stroke(getPixelvalue(pmouseX, pmouseY));
    
  }
}