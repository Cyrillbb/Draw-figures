import './errorModal.css'

export class ErrorModal {
    constructor() {
        this.app = document.getElementById('root');
        this.errorModal = document.createElement('div');
        this.errorModal.className = 'errorModal--hidden';

        this.errorBlock = document.createElement('div');
        this.errorBlock.className = 'errorBlock'
        
        this.errorMessage = document.createElement('h3');
        
        this.checkErrorBtn = document.createElement('button');
        this.checkErrorBtn.innerText = 'Ok';        

        this.errorBlock.append(this.errorMessage, this.checkErrorBtn);
        this.errorModal.append(this.errorBlock)
        this.app.append(this.errorModal);

        this.checkErrorBtn.addEventListener('click', () => {
            this.hideErrorModal();
        })
    }

    setErrorMessage(err) {
        this.errorMessage.innerText = `${err}`;
        this.errorModal.className = 'errorModal'
    }

    hideErrorModal() {
        this.errorMessage.innerText = '';
        this.errorModal.className = 'errorModal--hidden'
    }
}