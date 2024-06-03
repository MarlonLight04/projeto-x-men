const cards = document.querySelectorAll('.card');
const personagens = document.querySelectorAll('.personagem');

cards.forEach((card, index) =>{
    card.addEventListener("click", () => {
        const cardselect = document.querySelector('.card.selecionado');
        cardselect.classList.remove("selecionado");
        card.classList.add("selecionado");

        const personagemselect = document.querySelector('.personagem.selecionado');
        personagemselect.classList.remove("selecionado");
        personagens[index].classList.add("selecionado");
    })
})