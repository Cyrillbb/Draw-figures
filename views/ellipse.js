export class Ellipse {

    constructor(desc) {
        this.desc = desc;
        this.pntRegExp = /\[\d+, \d+\]/gm;
        this.rad1RegExp = /-r1 \d+/gm;
        this.rad2RegExp = /-r2 \d+/gm;        
        this.radius1 = desc.match(this.rad1RegExp)[0].split(' ')[1]
        this.radius2 = desc.match(this.rad2RegExp)[0].split(' ')[1]
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
        context.beginPath();
        console.log('/// ', ...this.coords[0], this.radius1, this.radius2)
        context.ellipse(...this.coords[0], this.radius1, this.radius2, Math.PI , 0, 2 * Math.PI)
        context.stroke();
    }
}

//ellipse -p [75, 75] -r1 50 -r2 25 -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)