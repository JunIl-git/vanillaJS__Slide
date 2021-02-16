const list = document.querySelector(".slide__list");
const listItem = document.querySelectorAll(".slide__list__item");
const prevBtn = document.querySelector(".button__box__prevBtn");
const nextBtn = document.querySelector(".button__box__nextBtn");


let transMove = -300;
let currentNumber = 1
list.style.transform = `translateX(${transMove}px)`;

setInterval(()=>{
    list.style.transition = "0.3s all";
    transMove -= 300
    currentNumber += 1;
    list.style.transform = `translateX(${transMove}px)`;
    console.log( "transMove =",transMove);
    console.log("currentNumber =", currentNumber);

    if(currentNumber)
},2000)

function handleNextClick(){
    if(currentNumber === 5){
        list.style.transition = "0.3s all";
        currentNumber = 1;
        console.log("currentNumber =", currentNumber);
        transMove -=300;
        console.log( "transMove =",transMove);
        list.style.transform = `translate(${transMove}px)`;
        setTimeout(()=> {
            list.style.transition = "none";
            transMove = -300;
            list.style.transform = `translate(${transMove}px)`;
            return transMove;
        },300)
    }else {
        list.style.transition = "0.3s all";
        transMove -= 300;
        list.style.transform = `translate(${transMove}px)`;
        currentNumber += 1;
        console.log( "transMove =",transMove);
        console.log("currentNumber =", currentNumber);
    }
}

function handlePrevClick(){
    if(currentNumber === 1){
        list.style.transition = "0.3s all";
        currentNumber = 5;
        console.log("currentNumber =", currentNumber);
        transMove +=300;
        console.log( "transMove =",transMove);
        list.style.transform = `translate(${transMove}px)`;
        setTimeout(()=> {
            list.style.transition = "none";
            transMove = -1500;
            list.style.transform = `translate(${transMove}px)`;
            return transMove;
        },300)
    }else {
        list.style.transition = "0.3s all";
        transMove += 300;
        list.style.transform = `translate(${transMove}px)`;
        currentNumber -= 1;
        console.log( "transMove =",transMove);
        console.log("currentNumber =", currentNumber);
    }
}

function copyItem(){
    let firstChild = list.firstElementChild;
    let lastChild = list.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);
    list.appendChild(clonedFirst);
    list.insertBefore(clonedLast, list.firstElementChild);
}
copyItem();

prevBtn.addEventListener("click",handlePrevClick);
nextBtn.addEventListener("click", handleNextClick);