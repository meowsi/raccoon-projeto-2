const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const telInput = document.querySelector('#tel');
const professionInput = document.querySelector('#profession');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log('hello')
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add();
        msg.innerHTML = 'Por favor informe todos os campos';
    }

    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        console.log('success');
        msg.innerHTML = '';
    }
}




const openForm = document.querySelectorAll('#button.black');
const closeForm = document.querySelector('form a');
const form = document.querySelector('#my-form');

for (let i = 0; i < openForm.length; i++) {
    openForm[i].addEventListener('click', e => {
        e.preventDefault();
        console.log('hello')
    
        form.style.display = 'flex';
    })
}

closeForm.addEventListener('click', e => {
    e.preventDefault();
    
    form.style.display = 'none';
})


if (window.matchMedia("(min-width: 893px)").matches) {
    
    const menuItem = document.querySelector('.menu');
    const desc = document.querySelector('.item-description');

    for (let i = 0; i < menuItem.childElementCount; i++) {
        menuItem.children[i].addEventListener('click', e => {
            e.preventDefault();

            desc.innerText = i+1 + menuItem.children[i].children[1].innerText
        })
    }

}

