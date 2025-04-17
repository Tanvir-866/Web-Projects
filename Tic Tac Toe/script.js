let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msgContainer = document.querySelector(".msgCont");
let newGamebutton = document.querySelector("#newGaButt");
let msg = document.querySelector("#msg");
let mainBody = document.querySelector("main");

let turn = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function newGame(){
    turn = true;
    enableBoxes();
    // msgContainer.classList.add("hide");
    // mainBody.classList.remove("hide");
    resetbtn.innerText = "Reset Game";
    msg.innerText = "Result!";
};

  

const disabeleBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    // msgContainer.classList.remove("hide");
    // mainBody.classList.add("hide");
    disabeleBoxes();
    resetbtn.innerText = "New Game"
}

function checkWinner(){
    for (let patt of winPatterns) {
        
        let posVal1 = boxes[patt[0]].innerText;
        let posVal2 = boxes[patt[1]].innerText;
        let posVal3 = boxes[patt[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 ===posVal3){
                showWinner(posVal1);
            }
        }
        
    }
};

boxes.forEach(box => {

    function forEventLi() {

        if (turn) {
            box.innerText = "x";
            box.style.color = "red";
            turn = false;
        } else {
            box.innerText = "o";
            box.style.color = "green";
            turn = true;
        }
        box.disabled = true;
        checkWinner();

    }

    box.addEventListener('click', forEventLi);

});



// newGamebutton.addEventListener("click",newGame);
resetbtn.addEventListener('click',newGame);