console.log("Js carregando");

const btnNewslatter = document.querySelector('.newsletter-button');
const inputNewslatter = document.querySelector('.newsletter-input').value.trim();

//trim() - apaga espaços em branco.

function inputBtn() {
    console.log("ativando função")

    const inputValue = inputNewslatter;

    if (inputValue || inputValue.includes('@')) {

        alert('Por favor, digite um email válido')

        return;
    };

    console.log("terminando função")
};
btnNewslatter.addEventListener('click', inputBtn);