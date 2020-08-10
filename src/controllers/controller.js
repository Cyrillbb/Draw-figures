export class Controller {
    constructor(model, form, canvas, errorModal, helpWingow) {
        //binding this
        this.handleAddFigure = this.handleAddFigure.bind(this);
        this.handleRemoveLast = this.handleRemoveLast.bind(this);
        this.handleResetCanvas = this.handleResetCanvas.bind(this);
        this.handleShowHelp = this.handleShowHelp.bind(this);

        this.model = model;
        this.form = form;
        this.canvas = canvas;
        this.errorModal = errorModal;
        this.helpWingow = helpWingow;

        //rendering views
        this.canvas.render();
        this.form.render();
        this.errorModal.render();
        this.helpWingow.render();

        //initialising event listeners
        this.form.handleAddFigure(this.handleAddFigure);
        this.form.handleRemoveLast(this.handleRemoveLast);
        this.form.handleResetCanvas(this.handleResetCanvas);
        this.form.handleShowHelp(this.handleShowHelp);

    }

    handleAddFigure(input) {
        try {
            input.split('\n').forEach((figure, index) => {
                if (figure !== '') this.model.add(figure, index + 1)
            });
        }
        catch (err) {
            this.errorModal.setErrorMessage(err.message)
        }
        finally {
            this.canvas.clearCanvas();
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

    handleShowHelp() {
        this.helpWingow.window.className = 'helpWindow';
    }
}