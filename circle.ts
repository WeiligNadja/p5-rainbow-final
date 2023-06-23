import { p } from './index';

// Beispiel für eine Hilfsfunktion, die im Starter-Code
// vorbereitet sein könnte.
export function drawCircle(position: { x: number, y: number }) {
  p.push();
  p.strokeWeight(10);
  p.stroke('red');
  p.fill(p.color(255, 0, 255, 200));
  p.circle(position.x, position.y, 150);
  p.pop();
}
