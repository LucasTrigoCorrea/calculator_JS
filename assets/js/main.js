function Calculadora(){
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(conta === 0){
                this.display.value = 0;
                return;
            }
            if(!conta){
                alert('Conta Inválida!');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta Inválida!');
            return;
        }
    };
    
    this.addNumDisplay = el => {
        if(el.innerText === 'x'){
            this.display.value += '*';  
        } else if(el.innerText === '÷'){
            this.display.value += '/';
        } else if(el.innerText === ','){
            this.display.value += '.';
        }
        else {
            this.display.value += el.innerText;
            this.display.focus();
        }
    };
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

}

const calculadora = new Calculadora();
calculadora.inicia();