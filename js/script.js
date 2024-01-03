const allCards = document.querySelectorAll('.card');

allCards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        removeActiveClass();
        card.classList.add('active');
    })
})

const removeActiveClass = () => {
    allCards.forEach((card)=>{
        card.classList.remove('active')
    })
}