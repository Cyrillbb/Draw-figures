export class Line {
    constructor(desc) {
        this.desc = desc;
        this.pntRegExp = /\[\d+, \d+\]/gm;
        this.coords = desc.match(this.pntRegExp).map(i => JSON.parse(i));
        console.log(this.coords)
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
        context.moveTo(...this.coords[0]);
        context.lineTo(...this.coords[1]);
        context.stroke();
    }
}

//line -p [50, 50] [100, 100] -c rgb(255, 0, 0)