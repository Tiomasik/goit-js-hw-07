const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, onFormSubmit)

// Перший метод!!!

// function onFormSubmit(event) {
//     event.preventDefault();
//     const elementsForm = {};
//     console.log(`Hello!`)
    
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((velue, name) => {
//         elementsForm[`${name}`] = `${velue}`
//     })
//     console.log(elementsForm);
//     formEl.reset()
// }

// Другий метод!!!

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email && password) {
        const elementsForm = {
            email,
            password,
        }
        console.log(elementsForm);
        formEl.reset()
    } else {
    return alert(`Заповніть, будь ласка, всі поля :)`)
    }
}





