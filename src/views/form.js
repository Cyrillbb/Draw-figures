import './form.css'

export class Form {    
    render() {
        this.app = document.getElementById('root');
        this.formElement = document.createElement('form');
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.className = 'inpt';
        this.input.required = true
        this.submitBtn = document.createElement('button');
        this.submitBtn.type = 'submit';
        this.submitBtn.innerText = 'submit'
        this.formElement.append(this.input, this.submitBtn);
        this.app.append(this.formElement);
    }

    handleAddFigure(handler) {
        this.formElement.addEventListener('submit', event => {
            event.preventDefault();
            console.log(handler)
            if(this.input.value) {
                handler(this.input.value);
                this.input.value = ''
            }
        })
    }
}