// Движение вперёд
const btnNext = document.querySelectorAll('[data-nav="next"]');
btnNext.forEach(function(button){
    button.addEventListener("click", function(){

        const thisCard = this.closest("[data-card]");
        const thisCardNumber = parseInt(thisCard.dataset.card); 
        const nextCard = thisCardNumber + 1;

        thisCard.classList.add("hidden")

        document.querySelector(`[data-card="${nextCard}"]`).classList.remove("hidden");

    })
})

// Движение назад
const btnPrev = document.querySelectorAll('[data-nav="prev"]');
btnPrev.forEach(function(button){
    button.addEventListener("click", function(){

        const thisCard = this.closest("[data-card]");
        const thisCardNumber = parseInt(thisCard.dataset.card); 
        const prevCard = thisCardNumber - 1;

        thisCard.classList.add("hidden")

        document.querySelector(`[data-card="${prevCard}"]`).classList.remove("hidden");

    })
})