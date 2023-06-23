// CSS Styles importieren; kann gelöscht werden falls nicht benötigt
import './style.css';

// Wir laden p5js
import p5 = require('p5');
import { drawCircle } from './circle';

// Wir informieren p5js, welche Funktionen unser Programm bereitstellt.
// Mit TypeScript und p5js verwendet man am besten den "instance mode"
// statt dem "global mode" (https://p5js.org/reference/#/p5/p5).
// Man kann die Funktionen entfernen, die man in der jeweiligen Übung
// nicht braucht (z.B. kein Reagieren auf Tastatur -> `keyPressed` weg).
export let p: p5;
new p5((p5: p5) => {
  p = p5;
  p.preload = preload;
  p.setup = setup;

  p.draw = draw;
  p.keyPressed = keyPressed;
  p.mousePressed = mousePressed;
  p.doubleClicked = mouseDoubleClicked;
});

function preload() {
  // Diese Funktion wird vor `setup` aufgerufen. Wir verwenden sie,
  // um z.B. Bilder zu laden.
  // https://p5js.org/reference/#/p5/preload
}

function setup() {
  // Diese Funktion wird einmal beim Programmstart aufgerufen.
  // https://p5js.org/reference/#/p5/setup
  p.createCanvas(400, 400);
  p.colorMode(p.HSB);

}

function keyPressed() {
  // Diese Funktion wird aufgerufen, wenn eine Taste gedrückt wird.
  // https://p5js.org/reference/#/p5/keyPressed
  console.log(`Key ${p.keyCode} has been pressed`);
}

function mouseDoubleClicked() {
  // Diese Funktion wird aufgerufen, wenn die Mause geklickt wird.
  // https://p5js.org/reference/#/p5/mousePressed
  console.log(`Mouse was double clicked at ${p.mouseX}/${p.mouseY}`);
}

function mousePressed() {
  // Diese Funktion wird aufgerufen, wenn die Mause geklickt wird.
  // https://p5js.org/reference/#/p5/mousePressed
  console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);
}

function draw() {
  // Himmel
  p.background('skyblue');
  
  // Regenbogen
  p.strokeWeight(10);
  p.noFill();
  
  let opacity = p.mouseX / 400;
  
  for (let i = 0; i < 6; i++) {
    p.stroke(360 / 6 * i, 100, 100, opacity);
    p.ellipse(200, 200, 200 + i * 20, 200 + i * 20);
  }
  // Wiese
  p.noStroke();
  p.fill(120, 100, 60);
  p.rect(0, 250, 400, 150);

  // Blumen
  drawFlower(350, 280, 30);
  drawFlower(110, 320, 20);
  drawFlower(30, 370, 35);
  drawFlower(220, 350, 25);
  drawFlower(220, 350, 70);
  drawFlower(270, 310, 320);
  drawFlower(50, 290, 290);
  drawFlower(360, 370, 330);

  // Wolken
  drawCloud(20, 30);
  drawCloud(300, 50);
  drawCloud(140, 100);
}

function drawFlower(x, y, color) {
  p.noStroke();

  if (!color) {
    color = 30;
  }

  p.fill(color, 100, 100);
  p.ellipse(x - 10, y - 10, 20);
  p.ellipse(x - 10, y + 10, 20);
  p.ellipse(x + 10, y - 10, 20);
  p.ellipse(x + 10, y + 10, 20);

  p.fill(50, 100, 100);
  p.ellipse(x, y, 20, 20);
}

function drawCloud(x, y) {
  p.noStroke();
  p.fill(255);
  p.ellipse(x, y, 24);
  p.ellipse(x + 10, y + 10, 24);
  p.ellipse(x + 30, y + 10, 24);
  p.ellipse(x + 30, y - 10, 24);
  p.ellipse(x + 20, y - 10, 24);
  p.ellipse(x + 40, y, 24);
}