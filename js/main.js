// Движение вперёд
const btnNext = document.querySelectorAll('[data-nav="next"]');
btnNext.forEach(function(button){
    button.addEventListener("click", function(){
        const thisCard = this.closest("[data-card]");
        navigate("next", thisCard);

    })
})

// Движение назад
const btnPrev = document.querySelectorAll('[data-nav="prev"]');
btnPrev.forEach(function(button){
    button.addEventListener("click", function(){
        const thisCard = this.closest("[data-card]");
        navigate("prev", thisCard);

    })
})


function navigate(derection, thisCard) {

    const thisCardNumber = parseInt(thisCard.dataset.card);
    
    let nextCard;

    if (derection == "next") {
        nextCard = thisCardNumber + 1;
    } else {
        nextCard = thisCardNumber - 1;
    }
    
    thisCard.classList.add("hidden")
    document.querySelector(`[data-card="${nextCard}"]`).classList.remove("hidden");

}