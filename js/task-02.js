const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`#ingredients`);

const makeListItem = items => {
  return items.map(element => {
    const itemEl = document.createElement(`li`);
    itemEl.textContent = element;
    itemEl.classList.add(`item`);
    console.log(itemEl);
    return itemEl
  })
}

const elements = makeListItem(ingredients);

listEl.append(...elements);

