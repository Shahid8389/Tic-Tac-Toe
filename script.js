
let buttons = document.querySelectorAll(".button");
let resBtn = document.querySelector("#restart");
let newGameBtn = document.querySelector("#newGame");
let popup = document.querySelector(".popup");
let container = document.querySelector(".container");
let message = document.querySelector("#message");


let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

let xTurn = true;
let count = 0;
let winner = false;

function disabledButtons(){
    buttons.forEach( (element) => {
        element.disabled = true;
    })
}

function enabledButtons(){
    buttons.forEach( (element) => {
        element.disabled = false;
    })
}

function winChecker(){
    for (let pattern of winningPattern) {
        
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            if (pos1Val === pos2Val && pos2Val === pos3Val ) {
                disabledButtons();
                winner = true;
                count = 0;

                message.innerText = "Winner is '" + pos1Val + "'";
                container.classList.toggle('hide');
                container.classList.toggle('flex');
                popup.classList.toggle('hide');

            }
        }
        
    }
    
}

buttons.forEach( (element) => {
    element.addEventListener('click', () => {

        if (xTurn == true) {
            // For X turn
            xTurn = false;
            element.innerText = 'X';
            element.disabled = true;
        }
        else{
            // For Y turn
            xTurn = true;
            element.innerText = 'O';
            element.disabled = true;
        }
        // For Draw Logic
        count += 1;

        winChecker();
        
        if (count === 9) {
            gameDraw();
        }
        
    })
    
});

function gameDraw(){
    message.innerText = "Game Draw!";
    container.classList.toggle('hide');
    container.classList.toggle('flex');
    popup.classList.toggle('hide');
    count = 0;

}

resBtn.addEventListener('click', () => {
    enabledButtons();
    xTurn = true;
    count = 0;
    buttons.forEach( (element) => {
        element.innerText = ""
    })
})

newGameBtn.addEventListener('click', () => {
    enabledButtons();
    xTurn = true;
    count = 0;
    buttons.forEach( (element) => {
        element.innerText = ""
    })
    container.classList.toggle('hide');
    container.classList.toggle('flex');
    popup.classList.toggle('hide');
})