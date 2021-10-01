const openForm = document.querySelectorAll('#button.black');
const closeForm = document.querySelector('form a');
const form = document.querySelector('#my-form');

for (let i = 0; i < openForm.length; i++) {
    openForm[i].addEventListener('click', e => {
        e.preventDefault();
    
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