import './form.css'

export class Form {
    render() {
        this.app = document.getElementById('root');
        this.formElement = document.createElement('form');
        
        this.input = document.createElement('textarea');
        this.input.className = 'inpt';
        this.input.required = true;
        this.input.cols = 74;
        this.input.rows = 5;

        this.submitBtn = document.createElement('button');
        this.submitBtn.type = 'submit';
        this.submitBtn.innerText = 'Submit';

        this.removeLatestBtn = document.createElement('button');
        this.removeLatestBtn.type = 'button';
        this.removeLatestBtn.innerText = 'Remove last figure';

        this.resetCanvasBtn = document.createElement('button');
        this.resetCanvasBtn.type = 'button';
        this.resetCanvasBtn.innerText = 'Reset Canvas';

        this.showHelpBtn = document.createElement('button');
        this.showHelpBtn.type = 'button';
        this.showHelpBtn.innerText = 'Show formatting help';


        this.btnBlock = document.createElement('div');
        this.btnBlock.append(this.submitBtn, this.removeLatestBtn, this.resetCanvasBtn, this.showHelpBtn);

        this.formElement.append(this.input, this.btnBlock);
        this.app.append(this.formElement);
    }

    handleAddFigure(handler) {
        this.formElement.addEventListener('submit', event => {
            event.preventDefault();
            if (this.input.value) {
                handler(this.input.value);
                this.input.value = ''
            }
        })
    }

    handleRemoveLast(handler) {
        this.removeLatestBtn.addEventListener('click', () => {
            handler();
        })
    }

    handleResetCanvas(handler) {
        this.resetCanvasBtn.addEventListener('click', () => {
            handler();
        })
    }

    handleShowHelp(handler) {
        this.showHelpBtn.addEventListener('click', () => {
            handler();
        })
    }
}