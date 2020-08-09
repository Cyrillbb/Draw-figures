import './canvas.css'

export class Canvas {
    render() {
        this.app = document.getElementById('root');
        this.canvasDiv = document.createElement('div');
        this.canvasDiv.className = 'canvasBlock'

        this.header = document.createElement('h3');
        this.header.innerText = 'Drawing area';

        this.canvas = document.createElement('canvas');
        this.canvas.width = '700';
        this.canvas.height = '600';
        this.canvas.className = 'canvas';

        this.canvasDiv.append(this.header, this.canvas);
        this.app.append(this.canvasDiv);
    }

    clearCanvas() {
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, 700, 600);
    }

    draw(figureData) {
        switch (figureData.figureType) {
            case ('line'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = figureData.options.color;
                figureData.dashedLine ? context.setLineDash([5, 5]) : undefined
                context.beginPath();
                context.moveTo(...figureData.figureCoords[0]);
                context.lineTo(...figureData.figureCoords[1]);
                context.closePath();
                context.stroke();
                context.setLineDash([0]);
                break
            }
            case ('multiline'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = figureData.options.color;
                figureData.dashedLine ? context.setLineDash([5, 5]) : undefined
                context.beginPath();
                context.moveTo(...figureData.figureCoords[0]);                
                figureData.figureCoords.slice(1).forEach(coords => {
                    context.lineTo(...coords);
                    context.moveTo(...coords);
                })
                context.closePath();
                context.stroke();
                context.setLineDash([0]);
                break
            }
            case ('rectangle'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = figureData.options.color;
                figureData.dashedLine ? context.setLineDash([5, 5]) : undefined
                context.fillStyle = figureData.options.bgColor;
                context.beginPath();
                context.closePath();
                context.strokeRect(...figureData.figureCoords[0], ...figureData.figureCoords[1]);
                context.fillRect(...figureData.figureCoords[0], ...figureData.figureCoords[1]);
                context.setLineDash([0]);
                break
            }
            case ('triangle'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = figureData.options.color;
                figureData.dashedLine ? context.setLineDash([5, 5]) : undefined
                context.fillStyle = figureData.options.bgColor;
                context.beginPath();
                context.moveTo(...figureData.figureCoords[0]);
                context.lineTo(...figureData.figureCoords[1]);
                context.lineTo(...figureData.figureCoords[2]);                
                context.closePath();
                context.stroke();
                context.fill();
                context.setLineDash([0]);
                break
            }
            case ('circle'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = figureData.options.color;
                figureData.dashedLine ? context.setLineDash([5, 5]) : undefined
                context.fillStyle = figureData.options.bgColor;
                context.beginPath();
                context.arc(...figureData.figureCoords.center, figureData.figureCoords.radius, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();
                context.fill();
                context.setLineDash([0]);
                break
            }
            case ('ellipse'): {
                const context = this.canvas.getContext('2d');
                context.strokeStyle = figureData.options.color;
                figureData.dashedLine ? context.setLineDash([5, 5]) : undefined
                context.fillStyle = figureData.options.bgColor;
                context.beginPath();
                context.ellipse(...figureData.figureCoords.center, figureData.figureCoords.radius1, figureData.figureCoords.radius2, Math.PI, 0, 2 * Math.PI)
                context.closePath();
                context.stroke();
                context.fill();
                context.setLineDash([0]);
                break
            }
        }
    }
}