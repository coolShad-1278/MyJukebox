function preload() {
  mybg = loadImage("DJ.jpg")
  mysong1 = loadSound("maari.mp3")
  mysong2 = loadSound("naruto.mp3");
  mysong3 = loadSound("sunflower.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  s1 = createSlider(0, 1, 0.1, 0.1);
  s1.position(10, 10);
  bt1 = createButton("sunflower");
  bt1.position(10, 200);
  bt1.size(100, 100);
  bt1.mousePressed(song1control);
  bt2 = createButton("naruto");
  bt2.position(10, 110);
  bt2.size(100, 100);
  bt2.mousePressed(song2control);
  bt3 = createButton("maari")
  bt3.position(10, 290);
  bt3.size(100, 100);
  bt3.mousePressed(song3control);
  stopbutton = createButton("STOP")
  stopbutton.position(10,490)
  stopbutton.size(100,100)
  stopbutton.mousePressed(stop)
}

function draw() {
  background(mybg);
  mysong1.setVolume(s1.value());
  mysong2.setVolume(s1.value());
  mysong3.setVolume(s1.value());
  fill("Aqua");
  textSize(30);
  text(100 * s1.value(), 150, 25);
}

function song1control() {
  mysong1.play();
  mysong2.stop();
  mysong3.stop();
  mysong4.stop();
}
function song2control() {
  mysong2.play();
  mysong1.stop();
  mysong3.stop();
}
function song3control() {
  mysong3.play();
  mysong1.stop();
  mysong2.stop();
}
function song4control () {
  mysong1.stop();
  mysong2.stop();
  mysong3.stop();
}
function stop () {
  mysong1.stop();
  mysong2.stop();
  mysong3.stop();
}