export class Controller {
    constructor(model, form, canvas) {
        this.handleAddFigure = this.handleAddFigure.bind(this)

        this.model = model;
        this.form = form;
        this.canvas = canvas;
        this.canvas.render();
        this.form.render();
        this.form.handleAddFigure(this.handleAddFigure);
        console.log(this.handleAddFigure)
    }

    handleAddFigure(input) {
        try {
            this.model.add(input);
            this.canvas.draw(this.model.figures[this.model.figures.length - 1])
        }
        catch(err) {
            console.log(err)
        }
    }
}