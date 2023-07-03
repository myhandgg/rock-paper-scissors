// Showing Rules
document.querySelector(".footer").onclick = () => {
    document.querySelector(".rules").style.display = "flex"
    document.querySelector(".overlay").style.display = "block"
}

// Closing Rules
document.querySelector('.head i').onclick = () => {
    document.querySelector(".rules").style.display = "none"
    document.querySelector(".overlay").style.display = "none"
}

// doing the game function

const scissorsAndPaper = document.querySelector(".scissors-paper")

const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const rock = document.querySelector(".rock")

const inGame = document.querySelector(".in-game")
const yourPickedImg = document.querySelector(".your-picked-img")
const computerPick = document.querySelector(".computer-picked-img")

const images = ["images/icon-paper.svg" , "images/icon-scissors.svg" , "images/icon-rock.svg"]

paper.onclick = () => {
    scissorsAndPaper.style.display = "none"
    rock.style.display = "none"
    inGame.style.display = "flex"
    yourPickedImg.src = images[0]
    yourPickedImg.style.border = "20px solid rgb(72,101,244)"
    setTimeout(random , 3000)  
}

scissors.onclick = () => {
    scissorsAndPaper.style.display = "none"
    rock.style.display = "none"
    inGame.style.display = "flex"
    yourPickedImg.src = images[1]
    yourPickedImg.style.border = "20px solid rgb(236,158,14)"
    setTimeout(random , 3000)   
}

rock.onclick = () => {
    scissorsAndPaper.style.display = "none"
    rock.style.display = "none"
    inGame.style.display = "flex"
    yourPickedImg.src = images[2]
    yourPickedImg.style.border = "20px solid rgb(220,46,78)"
    setTimeout(random , 3000)
}

computerPick.style.backgroundColor = "rgba(0,0,0,.2)"
computerPick.style.padding = "110px"

const score = document.querySelector(".score h1")

const win = document.querySelector(".win")
const winText = document.querySelector(".win p")
const playAgain = document.querySelector(".win .play-again")

score.textContent = window.localStorage.getItem("score")

function random() {
    // making computer do a random move
    computerPick.src = images[Math.floor(Math.random() * 3)]
    computerPick.style.padding = "50px"
    computerPick.style.backgroundColor = "white"
    computerPick.style.borderWidth = "20px"
    computerPick.style.borderStyle = "solid"
    // making border for computer pick
    if (computerPick.src === "http://127.0.0.1:5500/images/icon-paper.svg") {
        computerPick.style.borderColor = "rgb(72,101,244)"
    } else if (computerPick.src === "http://127.0.0.1:5500/images/icon-scissors.svg") {
        computerPick.style.borderColor = "rgb(236,158,14)"
    } else if (computerPick.src === "http://127.0.0.1:5500/images/icon-scissors.svg") {
        computerPick.style.borderColor = "rgb(220,46,78)"
    }
    setTimeout(() => {
        win.style.display = "block"
        if (yourPickedImg.src === "http://127.0.0.1:5500/images/icon-paper.svg" && computerPick.src === "http://127.0.0.1:5500/images/icon-rock.svg" || yourPickedImg.src === "http://127.0.0.1:5500/images/icon-scissors.svg" && computerPick.src === "http://127.0.0.1:5500/images/icon-paper.svg" || yourPickedImg.src === "http://127.0.0.1:5500/images/icon-rock.svg" && computerPick.src === "http://127.0.0.1:5500/images/icon-scissors.svg") {
            yourPickedImg.style.animation = "spread 1s infinite"
            score.textContent = +score.textContent + 1
            winText.textContent = "you win"
            window.localStorage.setItem("score" , score.textContent)
        } else if (yourPickedImg.src === computerPick.src) {
            computerPick.style.animation = "none"
            winText.textContent = "you tied"
        } else {
            computerPick.style.animation = "spread 1s infinite"
            winText.textContent = "you lose"
            score.textContent = +score.textContent - 1
            window.localStorage.setItem("score" , score.textContent)
            if (score.textContent < 0) {
                window.localStorage.setItem("score" , 0)
                score.textContent = 0
            }
        }
    }, 1000);
}

// play again button
playAgain.onclick = () => {
    scissorsAndPaper.style.display = "flex"
    rock.style.display = "block"
    inGame.style.display = "none"
    computerPick.style.backgroundColor = "rgba(0,0,0,.2)"
    computerPick.style.padding = "110px"
    computerPick.style.borderColor = "transparent"
    computerPick.src = ""
    computerPick.style.animation = "none"
    yourPickedImg.style.animation = "none"
    win.style.display = "none"
}