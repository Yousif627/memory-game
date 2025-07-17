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
    const StartElem = document.querySelector(".Start")

    let Flipped = false;
    let firstCard, secondCard;
    let blocked = false;
    let matches = 0;
    let timer = 20;
    let interval;
    let win = 0;



function flipCard() {

 if (blocked) return;

 this.classList.add('flip');

 if (!Flipped) {
     Flipped = true;
     firstCard = this;
    
     return;
    }  
    Flipped = false;
    secondCard = this;

    matching()
 }

function matching() {

    let match = firstCard.dataset.framework === secondCard.dataset.framework;
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

StartElem.addEventListener('click', ()=>{
    timers();
    cardElem.forEach(card => {
    card.addEventListener('click', flipCard)
});

})



function timers() {
    interval = setInterval(() => {
    timer--
    timerElm.textContent = timer
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
    return modelElm.style.display ='flex';
    }

 }

 function losingCondition(){

    if(timer === 0){
    return modelElm2.style.display ='flex';
    }
 }

}
document.addEventListener('DOMContentLoaded', init)