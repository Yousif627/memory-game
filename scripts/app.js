function init() {


const sqrElem = document.querySelectorAll('.sqr')
const flipCard = document.querySelector('.divisions')


const checkList = [],[],[],[],[],[]


function handleClick(){
    console.log('you clicked me')

}




flipCard.addEventListener("click",()=>{
    flipCard.classList.toggle("clicked")
})

sqrElem.forEach(yes => {
    yes.addEventListener('click', handleClick)
});
}

document.addEventListener('DOMContentLoaded', init)