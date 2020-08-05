export class Rectangle {

    constructor(desc) {
        this.desc = desc;
        this.pntRegExp = /\[\d+, \d+\]/gm;
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
        context.fillStyle = 'white';
        context.globalAlpha = 0.5
        context.fillRect(...this.coords[0], ...this.coords[1])
    }
}

//rectangle -p [50, 50] [100, 100] -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)