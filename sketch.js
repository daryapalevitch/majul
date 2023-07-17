let yemin; //  ריבוע מצד ימין
let luz; //  מהלוז
//נקודת הזזה
let objectX;
let objectY;
let objectSize;
let isDragging;
let eventDate = new Date("August 10, 2023 12:00:00").getTime(); // Set your event date and time here
//מוסיקה
let music;
//לחיצה על date
let rectX = 210;
let rectY = 210;
let rectWidth = 110;
let rectHeight = 50;

function preload() {
  yemin = loadImage("rib.png");
  luz = loadImage("meshul.png");
  maruf = loadImage("perachhh.png");
  mashew = loadImage("igul.png");
  mama = loadImage("resh.png");
  music = loadSound("tamar.mp3");
}

function setup() {
  createCanvas(460, 345); // גודל קנווס
  // נתוני נקודה
  objectX = 243;
  objectY = 130;
  objectSize = 15;
  isDragging = false;
}

function draw() {
  // background(50);
  // רקע לוגו
  background(220);
  stroke("rgba(0,0,0,0)");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill("#eae7d3");
  beginShape();
  vertex(-0.5, 0.5);
  vertex(461.5, 0.5);
  quadraticVertex(461.5, 0.5, 461.5, 0.5);
  vertex(461.5, 347.4);
  quadraticVertex(461.5, 347.4, 461.5, 347.4);
  vertex(-0.5, 347.4);
  quadraticVertex(-0.5, 347.4, -0.5, 347.4);
  vertex(-0.5, 0.5);
  quadraticVertex(-0.5, 0.5, -0.5, 0.5);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(239, 142.2);
  vertex(248.2, 142.2);
  vertex(248, 198);
  bezierVertex(248, 203, 244, 207, 239, 207);
  vertex(239, 207);
  vertex(239, 142);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(260, 142);
  vertex(269, 142);
  vertex(269, 166);
  bezierVertex(269, 174, 272, 178, 279, 178);
  bezierVertex(282, 178, 284, 177, 286, 175);
  bezierVertex(288, 173, 289, 170, 289, 166);
  vertex(289, 142);
  vertex(298, 142);
  vertex(298, 168);
  bezierVertex(298, 173, 296, 178, 293, 181);
  bezierVertex(289, 185, 284, 187, 279, 187);
  bezierVertex(273, 187, 269, 185, 265, 181);
  bezierVertex(262, 178, 260, 173, 260, 167);
  vertex(260, 142);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(168, 159);
  vertex(168, 185);
  vertex(159, 185);
  vertex(159, 161);
  bezierVertex(159, 157, 158, 154, 156, 152);
  bezierVertex(154, 150, 152, 149, 149, 149);
  bezierVertex(142, 149, 139, 153, 139, 161);
  vertex(139, 185);
  vertex(129, 185);
  vertex(129, 161);
  bezierVertex(129, 157, 128, 154, 126, 152);
  bezierVertex(125, 150, 122, 149, 119, 149);
  bezierVertex(113, 149, 109, 153, 109, 161);
  vertex(109, 198);
  bezierVertex(109, 203, 105, 207, 100, 207);
  vertex(100, 160);
  bezierVertex(100, 154, 102, 149, 105, 146);
  bezierVertex(109, 142, 113, 140, 119, 140);
  bezierVertex(125, 140, 129, 142, 133, 146);
  bezierVertex(133, 146, 134, 147, 134, 147);
  bezierVertex(134, 147, 135, 146, 135, 146);
  bezierVertex(139, 142, 143, 140, 149, 140);
  bezierVertex(154, 140, 159, 142, 162, 146);
  bezierVertex(166, 149, 168, 154, 168, 159);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(268, 235);
  vertex(268, 240);
  bezierVertex(266, 237, 263, 235, 260, 235);
  bezierVertex(254, 235, 250, 239, 250, 245);
  bezierVertex(250, 250, 255, 254, 260, 254);
  bezierVertex(263, 254, 266, 252, 268, 249);
  vertex(268, 254);
  vertex(270, 254);
  vertex(270, 235);
  vertex(268, 235);
  endShape();
  vertex(260, 252);
  bezierVertex(256, 252, 252, 249, 252, 245);
  bezierVertex(252, 241, 255.9, 237, 260, 237);
  bezierVertex(264, 237, 267, 240, 267, 245);
  bezierVertex(267, 249, 264, 252, 260, 252);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(196, 235);
  vertex(196, 240);
  bezierVertex(194, 237, 191, 235, 187, 235);
  bezierVertex(182, 235, 178, 239, 178, 245);
  bezierVertex(178, 250, 182, 254, 187, 254);
  bezierVertex(191, 254, 194, 252, 196, 249);
  vertex(196, 254);
  vertex(198, 254);
  vertex(198, 235);
  vertex(196, 235);
  endShape();
  vertex(187, 252);
  bezierVertex(183, 252, 180, 249, 180, 245);
  bezierVertex(180, 241, 183, 237, 187, 237);
  bezierVertex(192, 237, 195, 240, 195, 245);
  bezierVertex(195, 249, 192, 252, 187, 252);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(237, 224);
  vertex(237, 240);
  bezierVertex(235, 237, 232, 235, 228, 235);
  bezierVertex(223, 235, 219, 239, 219, 245);
  bezierVertex(219, 250, 223, 254, 228, 254);
  bezierVertex(232, 254, 235, 252, 237, 249);
  vertex(237, 254);
  vertex(239, 254);
  vertex(239, 224);
  vertex(237, 224);
  endShape();
  vertex(229, 252.8);
  bezierVertex(224, 252, 221, 249, 221, 245);
  bezierVertex(221, 240, 224, 237, 229, 237);
  bezierVertex(233, 237, 236, 240, 236, 245);
  bezierVertex(236, 249, 233, 252, 229, 252);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(125, 233);
  vertex(125, 235);
  vertex(119, 235);
  vertex(119, 254);
  vertex(117, 254);
  vertex(117, 235);
  vertex(114, 235);
  vertex(114, 233);
  vertex(117, 233);
  vertex(117, 224);
  vertex(119, 224);
  vertex(119, 233);
  vertex(125, 233);
  endShape();
  fill("#1d1d1b");
  //translate(-0.9777,-0.2102,0.2102,-0.9777,219.8519,480.3282);
  beginShape();
  vertex(134, 224);
  vertex(136, 224);
  quadraticVertex(136, 224, 136, 224);
  vertex(136, 232);
  quadraticVertex(136, 232, 136, 232);
  vertex(134, 232);
  quadraticVertex(134, 232, 134, 232);
  vertex(134, 224);
  quadraticVertex(134, 224, 134, 224);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(292, 233);
  vertex(292, 235);
  vertex(287, 235);
  vertex(287, 254);
  vertex(285, 254);
  vertex(285, 235);
  vertex(282, 235);
  vertex(282, 233);
  vertex(285, 233);
  vertex(285, 224);
  vertex(287, 224);
  vertex(287, 233);
  vertex(292, 233);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(146, 255);
  bezierVertex(144, 255, 141, 253, 140, 251);
  vertex(141, 250);
  bezierVertex(143, 252, 145, 253, 147, 253);
  bezierVertex(148, 252, 150, 252, 151, 250);
  bezierVertex(151, 249, 152, 248, 151, 248);
  bezierVertex(151, 246, 148, 245, 146, 244);
  bezierVertex(143, 242, 140, 241, 140, 237);
  bezierVertex(141, 234, 143, 233, 146, 233);
  bezierVertex(149, 232, 151, 233, 153, 236);
  vertex(152, 237);
  bezierVertex(150, 235, 148, 234, 146, 234);
  bezierVertex(144, 234, 143, 236, 142, 237);
  bezierVertex(142, 240, 144, 241, 147, 242);
  bezierVertex(149, 243, 152, 244, 153, 247);
  bezierVertex(154, 248, 153, 250, 152, 251);
  bezierVertex(151, 253, 149, 254, 14, 254);
  bezierVertex(147, 255, 147, 255, 146, 255);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(98, 233);
  vertex(100, 233);
  quadraticVertex(100, 233, 100, 233);
  vertex(100, 254);
  quadraticVertex(100, 254, 100, 254);
  vertex(98, 254);
  quadraticVertex(98, 254, 98, 254);
  vertex(98, 233);
  quadraticVertex(98, 233, 98, 233);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(319, 185);
  vertex(319, 120);
  bezierVertex(314, 120, 310, 124, 310, 129);
  vertex(310, 185);
  vertex(319, 185);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(217, 142);
  vertex(217, 152);
  bezierVertex(213, 146, 206, 142, 198, 142);
  bezierVertex(186, 142, 175, 152, 175, 164);
  bezierVertex(175, 177, 186, 187, 198, 187);
  bezierVertex(206, 187, 213, 182, 217, 176);
  vertex(217, 176);
  bezierVertex(217, 181, 221, 185, 226, 185);
  vertex(226, 142);
  vertex(217, 142);
  endShape();
  vertex(198, 177);
  bezierVertex(191, 177, 185, 171, 185, 164);
  bezierVertex(185.1, 157.1, 191.1, 151.1, 198.5, 151.1);
  bezierVertex(205.9, 151.1, 211.9, 157.1, 211.9, 164.5);
  bezierVertex(211.9, 171.9, 205.9, 177.9, 198.5, 177.9);
  endShape();
  fill("#1d1d1b");
  beginShape();
  vertex(318.7, 245.9);
  vertex(319.5, 245.9);
  bezierVertex(319.5, 245, 319.6, 245.4, 319.6, 245);
  bezierVertex(319.6, 239.9, 315.3, 235, 310.1, 235);
  bezierVertex(304, 235, 300.6, 240, 300.6, 245);
  bezierVertex(300.6, 250, 304, 254, 310.1, 254);
  bezierVertex(314.1, 254, 317.5, 252, 319, 248);
  vertex(316.9, 248);
  bezierVertex(315, 251, 313, 252.8, 310, 252.8);
  bezierVertex(306, 252.8, 302.9, 249, 302, 245.9);
  vertex(318.7, 245.9);
  endShape();
  vertex(310, 237.5);
  bezierVertex(313.8, 237.5, 317, 240.3, 317.5, 244);
  vertex(302.4, 244);
  bezierVertex(303, 240.4, 306.1, 237.5, 310, 237.5);
  endShape();
  fill("#c88320");
  beginShape();
  //arc(99.5,225.5,1,0,6.283185307179586,true);
  endShape();

  // מלבן שקוף מעל המילה date
  fill(255, 25, 10, 0);
  rect(rectX, rectY, rectWidth, rectHeight);

  // צורות
  image(yemin, 370, 20, 55, 55);
  image(luz, 290, 20, 55, 55);
  image(maruf, 200, 20, 55, 55);
  image(mashew, 120, 20, 55, 55);
  image(mama, 40, 20, 55, 55);

  // "Click on me"
  textSize(10);
  textAlign(CENTER);
  fill("#FF9800");
  let buttonText = "Click on me";
  let buttonTextWidth = textWidth(buttonText);
  let buttonTextX = width - 190;
  let buttonTextY = height - 77;
  text(buttonText, buttonTextX, buttonTextY);

  // נקודה זזה
  noStroke();
  fill("#FF9800");
  noStroke;
  ellipse(objectX, objectY, objectSize, objectSize);

  // Event Details - Countdown
  let now = new Date().getTime();
  let timeRemaining = eventDate - now;

  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  textSize(20);
  textAlign(CENTER);
  fill(0);
  text("Opening:", 130, 290);
  text(countdown, 250, 290);
}

function mousePressed() {
  //עכבר זז
  let distance = dist(mouseX, mouseY, objectX, objectY);
  if (distance < objectSize / 2) {
    isDragging = true;
  }
}

function mouseDragged() {
  // Update the object's position while dragging
  if (isDragging) {
    objectX = mouseX;
    objectY = mouseY;
  }
}
function mouseReleased() {
  // Stop dragging when the mouse is released
  isDragging = false;
}

function mouseClicked() {
  if (
    mouseX > rectX &&
    mouseX < rectX + rectWidth &&
    mouseY > rectY &&
    mouseY < rectY + rectHeight
  ) {
    if (!music.isPlaying()) {
      music.play();
    } else {
      music.pause();
    }
  }
}
