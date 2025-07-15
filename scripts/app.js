function init() {
    const cardElem = document.querySelectorAll(".memory-card")
    const timerElm = document.querySelector("#timer")
    const openBtn = document.querySelector(".tutorial")
    const closeBtn = document.querySelector(".model .model-inner button")
    const modalElm = document.querySelector(".model")
    const modelElm = document.querySelector(".model-overlay")
    const modelElm2 = document.querySelector(".model-overlay-2")
    const restElm = document.querySelector(".restart")
    const restElm2 = document.querySelector(".restart-2")

    let Flipped = false;
    let firstCard, secondCard;
    let blocked = false;
    let matches = 0;
    let timer = 200000000;
    let interval;
    let win = 0;



function flipCard() {
        if (blocked) return;


        this.classList.add('flip');

        if (!Flipped) {
            console.log(firstCard)
            Flipped = true;
            firstCard = this;
        
            return;
        }

        Flipped = false;
        secondCard = this;
        console.log(secondCard)

        matching()
 }

function matching() {
        console.log("matching function called")
        console.log(firstCard.dataset.framework)
        console.log(secondCard.dataset.framework)
        let match = firstCard.dataset.framework === secondCard.dataset.framework;
        console.log(match)
        match ? disableCard() : dontFlip(), matches++;

        if(match === true){
            win++
        }
        winningCondition()

}

function disableCard() {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
}

function dontFlip() {
        blocked = true;
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        blocked = false;
}

(function shuffle() {
        cardElem.forEach(card => {
            let randomize = Math.floor(Math.random() * 12);
            card.style.order = randomize;
        });
})();



cardElem.forEach(card => {
        card.addEventListener('click', flipCard)
});

openBtn.addEventListener('click', () => {
        modalElm.classList.add("open");
})

closeBtn.addEventListener('click', () => {
        modalElm.classList.remove("open");
})

restElm.addEventListener('click', ()=>{

    location.reload();
    
})
restElm2.addEventListener('click', ()=>{

    location.reload();
})


function timers() {
        interval = setInterval(() => {
            timer--
            timerElm.textContent = timer
            console.log()
            if (timer === 0) {
                stopWatch()
            }
            losingCondition()
        }, 1000)
}

 function stopWatch() {
        clearInterval(interval);

 }


 function winningCondition(){
    if (win === 6){
    console.log("You win")
        return modelElm.style.display ='flex';
    }

 }

 function losingCondition(){

    if(timer === 0){
        console.log("You lose")
        return modelElm2.style.display ='flex';
    }


 }

    timers()

}
document.addEventListener('DOMContentLoaded', init)