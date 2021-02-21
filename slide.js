const list = document.querySelector(".slide__list");
const listItem = document.querySelectorAll(".slide__list__item");
const prevBtn = document.querySelector(".button__box__prevBtn");
const nextBtn = document.querySelector(".button__box__nextBtn");

let transMove = -300;
let currentNumber = 1
let mode = "auto";
list.style.transform = `translateX(${transMove}px)`;

let repeat = setInterval(rightMove,2000);


function transMode(){
    mode = "menual";            //모드 menual 변경
    console.log("mode =",mode);
    setTimeout(()=>{
        mode = "auto";      //모드 auto 변경
    },6000);
}


function handleNextClick(){
    rightMove();    // nextBtn
    clearInterval(repeat);
    transMode();    // mode change & interval
    if(mode === "menual"){
        repeat = setInterval(rightMove,5000);
    }
    console.log(currentNumber);
}

function handlePrevClick(){
    leftMove();     // prevBtn
    transMode();    // mode change & interval
}


function rightMove(){
    if(currentNumber === 5){
        list.style.transition = "0.3s all";
        currentNumber = 1;
        transMove -=300;
        list.style.transform = `translate(${transMove}px)`;
        setTimeout(()=> {
            list.style.transition = "none";
            transMove = -300;
            list.style.transform = `translate(${transMove}px)`;
        },300)
    }else {
        list.style.transition = "0.3s all";
        transMove -= 300;
        list.style.transform = `translate(${transMove}px)`;
        currentNumber += 1;
    }
}

function leftMove(){
    if(currentNumber === 1){
        list.style.transition = "0.3s all";
        currentNumber = 5;
        transMove +=300;
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