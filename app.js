let p1Score = document.querySelector("#player1");
let p2Score = document.querySelector("#player2");
let p1Button = document.querySelector("#addPlayer1");
let p2Button = document.querySelector("#addPlayer2");
let reset = document.querySelector("#reset");
let p1Value = parseInt(p1Score.textContent);
let p2Value = parseInt(p2Score.textContent);

let isGameOver = false;
let select = document.querySelector("#playto");
let winningScore = 2;


p1Button.addEventListener("click", function () {

    if (!isGameOver) {
        if ((p1Value !== winningScore)) {
            p1Score.textContent = p1Value + 1;
            p1Value += 1;
        }
        if (p1Value === winningScore) {
            isGameOver = true;
        }
    }
})

p2Button.addEventListener("click", function () {


    if (!isGameOver) {
        if ((p2Value !== winningScore)) {
            p2Score.textContent = p2Value + 1;
            p2Value += 1;
        }
        if (p2Value === winningScore) {
            isGameOver = true;
        }
    }
})

function toReset() {
    p1Value = 0;
    p2Value = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    isGameOver = false;
}

reset.addEventListener("click", toReset);

select.addEventListener("change", function () {
    toReset();
    winningScore = parseInt(select.value);
})