import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGalaryEl = document.querySelector(`.gallery`);

console.log(listGalaryEl);

const makeGalary = galleryItems.map(makeGalaryItem).join('')

function makeGalaryItem({ preview, original}) {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</div>`
}

// console.log(makeGalary)

listGalaryEl.innerHTML = makeGalary;

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)

// console.log(instance);