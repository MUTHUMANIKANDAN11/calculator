let calculation = JSON.parse(localStorage.getItem('calculation')) || '0';

document.querySelector('.js-result-calculation').innerHTML = calculation;

function updateCalculation(value){
    if(calculation === '0'){
        calculation = value;
    } else {
        calculation += value;
    }

    localStorage.setItem('calculation', JSON.stringify(calculation));
    document.querySelector('.js-result-calculation').innerHTML = calculation;
}

function execute(){
    calculation = eval(calculation);

    localStorage.setItem('calculation', JSON.stringify(calculation));
    document.querySelector('.js-result-calculation').innerHTML = calculation;
}

function clearCalculation(){
    calculation = '0';
    localStorage.removeItem('calculation');document.querySelector('.js-result-calculation').innerHTML = calculation;
}