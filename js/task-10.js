function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startsizeBox = 30;
let boxes = [];

const btnCreateEl = document.querySelector(`button[data-create]`);
const btnDestroyEl = document.querySelector(`button[data-destroy]`);
const inputEl = document.querySelector(`input`);
const divEl = document.querySelector(`#controls`)

inputEl.addEventListener(`input`, onChangeBoxSize);

btnCreateEl.addEventListener(`click`, createBoxes);

btnDestroyEl.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
  const newDivEls = document.querySelectorAll(`.cool`)
  for (const newDivEl of newDivEls) {
    newDivEl.remove();
  }
}

const makeBoxes = ({ width, height }) => {
  return`
    <div style="width:${width}; height:${height}; background-color:${getRandomHexColor()};" class="cool"></div>`
}

function createBoxes() {
  divEl.insertAdjacentHTML(`afterbegin`, boxes.map(makeBoxes).join(''));
}

function onChangeBoxSize(event) {
  // console.log(event.currentTarget.valueAsNumber);
  onChoiceBoxes(event.currentTarget.valueAsNumber)
}

function onChoiceBoxes(amount) {
  boxes = [];
  let sizeBox = 0;
  for (let index = 1; index <= amount; index += 1) {
    const numberBoxes = {};
    sizeBox = `${startsizeBox + (index - 1) * 10}px`;
    
    numberBoxes[`width`] = `${sizeBox}`;
    numberBoxes[`height`] = `${sizeBox}`;
    boxes.push(numberBoxes);
  }
}



