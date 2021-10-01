const API = "";
const myForm = document.querySelector('.my-form');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const _name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#tel').value;
    const cpf = document.querySelector('#cpf').value;
    const checkbox = document.querySelector('#termos');
    let sum = 0;

    const data = {
        _name,
        phone,
        cpf,
        email
    };

    if (_name === '') {
        msg.innerHTML = 'Preencha o nome corretamente';
    } else sum++;
    
    if (email === '' || !email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
        msg.innerHTML = 'Preencha o email corretamente';
    } else sum++;

    if (phone === '' || !phone.match(/^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)) {
        msg.innerHTML = 'Preencha o telefone corretamente';
    } else sum++;
    
    if (cpf === '' || !cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
        msg.innerHTML = 'Preencha o CPF corretamente';
    } else sum++;

    if (!checkbox.checked) {
        msg.innerHTML = 'Por favor aceite os termos e condições';
    } else sum++;


    if (sum === 5) {
        fetch(API, {
            method: "POST",
            body: JSON.stringify(data),
        });

        msg.innerHTML = 'Cadastrado com sucesso!';
    }
    
}