export class Form {
    constructor() {

    }
    render() {
        this.app = document.getElementById('root');
        this.formElement = document.createElement('form');
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.submitBtn = document.createElement('button');
        this.submitBtn.type = 'submit';
        this.submitBtn.innerText = 'submit'
        this.formElement.append(this.input, this.submitBtn);
        this.app.append(this.formElement);
    }
}