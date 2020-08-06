export class Controller {
    constructor(model, form, canvas, errorModal) {
        this.handleAddFigure = this.handleAddFigure.bind(this);
        this.handleRemoveLast = this.handleRemoveLast.bind(this);
        this.handleResetCanvas = this.handleResetCanvas.bind(this);

        this.model = model;
        this.form = form;
        this.canvas = canvas;
        this.errorModal = errorModal;

        this.canvas.render();
        this.form.render();
        this.form.handleAddFigure(this.handleAddFigure);
        this.form.handleRemoveLast(this.handleRemoveLast);
        this.form.handleResetCanvas(this.handleResetCanvas);

    }

    handleAddFigure(input) {
        try {
            //this.model.add(input);
            input.split('\n').forEach(figure => this.model.add(figure));
            //this.canvas.draw(this.model.figures[this.model.figures.length - 1]);

        }
        catch (err) {
            console.log(err);
            this.errorModal.setErrorMessage(err)
        }
        finally {
            this.model.figures.length > 0 ? 
            this.model.figures.forEach(figure => this.canvas.draw(figure)) :
            undefined
        }
    }

    handleRemoveLast() {
        try {
            this.model.removeLatest();
            this.canvas.clearCanvas();
            this.model.figures.forEach(figure => this.canvas.draw(figure))
        }
        catch (err) {
            console.log(err)
        }
    }

    handleResetCanvas() {
        try {
            this.model.clearData();
            this.canvas.clearCanvas();
        }
        catch (err) {
            console.log(err)
        }
    }
}