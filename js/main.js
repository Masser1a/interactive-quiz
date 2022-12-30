// Объект с сохраненными ответами 
const answers = {
    2: null,
    3: null,
    4: null,
    5: null
}

// Движение вперёд
const btnNext = document.querySelectorAll('[data-nav="next"]');
btnNext.forEach(function(button){
    button.addEventListener("click", function(){
        const thisCard = this.closest("[data-card]");



        if(thisCard.dataset.validate == "novalidate") {
            navigate("next", thisCard)
        } else {
            navigate("next", thisCard)
        }

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

// Функиця для навигации вперед и назад 
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

// Функция сбора заполненных данных  с карточки 
function gatherCardData(number) {

    let question;
    const result = []

    // Находим карточку по номеру и data атрибуту
    const currentCard = document.querySelector(`[data-card="${number}"]`)

    // Находим гланый вопрос карточки 
    question = currentCard.querySelector("[data-question]").innerText;

    // 1. Находим все заполненные значения из радио кнопок 
    const radioValues = currentCard.querySelectorAll('[type="radio"]');

    radioValues.forEach(function(item){
        if (item.checked) {
            result.push({
                name: item.name,
                value: item.value
            })
        }
    })

    console.log(result)

    const data = {
        question: question,
        answer: result
    }

    return data
}