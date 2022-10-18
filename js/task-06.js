const inputEl = document.querySelector(`#validation-input`);

inputEl.addEventListener(`blur`, onInputBlur)

function onInputBlur(event) {
    if (Number(event.currentTarget.value.length) === Number(event.currentTarget.dataset.length)) {
        console.log(`Hello`)
        inputEl.classList.remove(`invalid`)
        inputEl.classList.add(`valid`)
    } else {
        console.log(`By`)
        inputEl.classList.remove(`valid`)
        inputEl.classList.add(`invalid`)
    }
}