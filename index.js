import { Form } from './views/form';
import { Line } from './views/line';
import { Rectangle } from './views/rectangle';
import { Triangle } from './views/triangle';
import { Circle } from './views/circle';
import { Ellipse } from './views/ellipse';
import { State } from './models/state';

const line = new Line('line -p [300, 50] [600, 600] -c rgb(255, 0, 0)');
line.render();
line.draw();
const rectangle = new Rectangle('rectangle -p [50, 50] [100, 100] -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)');
rectangle.render();
rectangle.draw();
const triangle = new Triangle('triangle -p [50, 300] [50, 100] [300, 100] -c rgb (0, 0, 255) -b rgba (255, 0, 0, 0.3)');
triangle.render();
triangle.draw();
const cirle = new Circle('cirle -p [75, 75] -r 25 -c rgba (255, 0, 0, 0.8) -b rgba(255, 0, 0, 0.3)');
cirle.render();
cirle.draw();
const ellipse = new Ellipse('ellipse -p [75, 75] -r1 50 -r2 25 -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)');
ellipse.render();
ellipse.draw();
const form = new Form();
form.render();

const state = new State();
state.add('ellipse -p [75, 75] -r1 50 -r2 25 -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)')