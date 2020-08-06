export class Canvas {
    render() {
        this.app = document.getElementById('root');
        this.canvasDiv = document.createElement('div');
        this.canvas = document.createElement('canvas');
        this.canvas.width = '600';
        this.canvas.height = '600';
        this.canvas.style.backgroundColor = 'black';
        this.canvasDiv.append(this.canvas);
        this.app.append(this.canvasDiv);
    }
    draw(figureData) {
        switch (figureData.figureType) {
            case ('line'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = 'rgba(0, 255, 0, 1)'
                context.beginPath();
                context.moveTo(...figureData.figureCoords[0]);
                context.lineTo(...figureData.figureCoords[1]);
                context.closePath();
                context.stroke();
                break
            }
            case ('rectangle'): {
                const context = this.canvas.getContext('2d');
                context.fillStyle = 'green';
                context.beginPath();
                context.globalAlpha = 0.5;
                context.closePath();
                context.fillRect(...figureData.figureCoords[0], ...figureData.figureCoords[1]);
                break
            }
            case ('triangle'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = 'white'
                context.beginPath();
                context.moveTo(...figureData.figureCoords[0]);
                context.lineTo(...figureData.figureCoords[1]);
                context.lineTo(...figureData.figureCoords[2]);
                context.lineTo(...figureData.figureCoords[0]);
                context.closePath();
                context.stroke();
                break
            }
            case ('circle'): {
                const context = this.canvas.getContext('2d');
                context.fillStyle = 'red';
                context.beginPath();
                context.arc(...figureData.figureCoords.center, figureData.figureCoords.radius, 0, 2 * Math.PI);
                context.closePath();
                context.fill();
                break
            }
            case ('ellipse'): {
                const context = this.canvas.getContext('2d');
                context.fillStyle = 'white'
                context.beginPath();
                context.ellipse(...figureData.figureCoords.center, figureData.figureCoords.radius1, figureData.figureCoords.radius2, Math.PI, 0, 2 * Math.PI)
                context.closePath();
                context.fill();
                break
            }
        }
    }
}