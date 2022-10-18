const inputEl = document.querySelector(`#name-input`);
const spanEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInputChange)

function onInputChange(event) {
    spanEl.textContent = event.currentTarget.value ?
    event.currentTarget.value : `Anonymous`
}