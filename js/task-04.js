let counterValue = 0;

const btnDecrementEl = document.querySelector(`button[data-action="decrement"]`);
const btnIncrementEl = document.querySelector(`button[data-action="increment"]`);
const spanEl = document.querySelector(`#value`);
console.log(btnDecrementEl);
console.log(btnIncrementEl);
console.log(spanEl);

btnDecrementEl.addEventListener('click', makeDecrementEl);
btnIncrementEl.addEventListener('click', makeIncrementEl);

function makeDecrementEl(){
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

function makeIncrementEl(){
    counterValue += 1;
    spanEl.textContent = counterValue;
}


