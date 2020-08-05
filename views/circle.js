export class Circle {

    constructor(desc) {
        this.desc = desc;
        this.pntRegExp = /\[\d+, \d+\]/gm;
        this.radRegExp = /-r \d+/gm;
        console.log('>>> ', desc.match(this.radRegExp)[0].split(' ')[1])
        this.radius = JSON.parse(desc.match(this.radRegExp))[0].split(' ')[1]
        this.coords = desc.match(this.pntRegExp).map(i => JSON.parse(i));
    }

    render() {
        this.app = document.getElementById('root');
        this.canvasElement = document.createElement('canvas');
        this.canvasElement.width = '600';
        this.canvasElement.height = '600';
        this.canvasElement.style.backgroundColor = 'black';
        this.app.append(this.canvasElement)
    }

    draw() {
        const context = this.canvasElement.getContext('2d');
        context.strokeStyle = 'white'
        console.log(...this.coords[0], ...this.radius, 0, 2 * Math.PI)
        context.arc(...this.coords[0], ...this.radius, 0, 2 * Math.PI)
        context.stroke();
    }
}

//cirle -p [75, 75] -r 25 -c rgba (255, 0, 0, 0.8) -b rgba(255, 0, 0, 0.3)