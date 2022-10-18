const itemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${itemEl.length}`);
console.log(``);

const itemTitleEL = document.querySelectorAll(`.item h2`)

const itemSubitemEl = document.querySelectorAll(`.item ul`);

for (let index = 0; index < itemEl.length; index+=1) {
    console.log(`Category: ${itemTitleEL[index].textContent}`);
    console.log(`Elements: ${itemSubitemEl[index].children.length}`);
    console.log(``);
}