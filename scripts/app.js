function init() {
    const cardElem = document.querySelectorAll(".memory-card")
    const timerElm = document.querySelector("#timer")
    const messageElm = document.querySelector(".message")
    const openBtn = document.getElementById("openModal")
    const closeBtn = document.getElementById("closeModal")
    const modalElm = document.getElementById("modal")

    let Flipped = false;
    let firstCard, secondCard;
    let blocked = false;
    let matches = 0;
    let timer = 40;
    let interval;



function flipCard() {
        if (blocked) return;


        this.classList.add('flip');

        if (!Flipped) {
            console.log(firstCard)
            Flipped = true;
            firstCard = this;
            // timers()
            return;
        }

        Flipped = false;
        secondCard = this;
        console.log(secondCard)

        matching()
 }
    // console.log(firstCard.dataset.framework)
    // console.log(secondCard.dataset.framework)


function matching() {
        console.log("matching function called")
        console.log(firstCard.dataset.framework)
        console.log(secondCard.dataset.framework)
        let match = firstCard.dataset.framework === secondCard.dataset.framework;
        console.log(match)
        match ? disableCard() : dontFlip(), matches++;

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

openBtn.addEventListener("click", () => {
        modalElm.classList.add("open");
})

closeBtn.addEventListener("click", () => {
        modalElm.classList.remove("open");
})

function timers() {
        interval = setInterval(() => {
            timer--
            timerElm.textContent = timer
            console.log()
            if (timer === 0) {
                stopWatch()
            }
            // if(timerElm.textContent === || matches!==6){
            //     clearInterval(interval)
            //     messageElm.textContent = 'Time is up loser!'
            // }
        }, 1000)
}

 function stopWatch() {
        clearInterval(interval);

 }




    // if (timer === 0){

    //                 messageElm.textContent = 'Time is up loser!'
    //                 console.log(timers)
    //             }
    timers()

}
document.addEventListener('DOMContentLoaded', init)