let randomNumber = Math.round(Math.random() *99)+1
console.log(randomNumber);
const button = document.querySelector("#button")
remainingChance = 10

button.addEventListener("click", function(){
    const displayResult = document.querySelector("#displayResult")
    const refreshMsg = document.querySelector("#refreshMsg")

    if (remainingChance === 0) {
        displayResult.innerHTML = `You Lost! <br> <span class = "show-random-number">Random Number was "<span class= "rn-showed">${randomNumber}</span>"</span>`
        displayResult.style.color = "red"
        displayResult.style.fontWeight = "bold"
        refreshMsg.style.display = "block"
        return;
    }

    const inputNumber = parseInt(document.querySelector("input").value)

    let inputValue = document.querySelector("input")
    inputValue.value = ""

    if (inputNumber === "" || inputNumber < -1 || inputNumber > 101 || isNaN(inputNumber)) {
        displayResult.innerHTML = "Please enter a valid number"
        displayResult.style.color = "red"
    } else {
        let remaining = document.getElementById("remaining")
        remaining.innerHTML = remainingChance - 1
        remainingChance -= 1
        if (remainingChance < 4) {
            remaining.style.color = "red"
        }

        if (inputNumber === randomNumber) {
            displayResult.innerHTML = "Congratulations🎉 You won won the game!"
            displayResult.style.color = "green"
            displayResult.style.fontWeight = "bold"
            refreshMsg.style.display = "block"
        } else if (inputNumber < randomNumber) {
            displayResult.innerHTML = `"Your guess is <span class = "bold-msg">less than</span> a random number"`
            displayResult.style.color = "black"
        } else if (inputNumber > randomNumber) {
            displayResult.innerHTML = `"Your guess is <span class = "bold-msg">greater than</span> a random number"`
            displayResult.style.color = "black"
        }
    }

    let previousGuess = document.querySelector("#previousGuess")
    previousGuess.innerHTML = inputNumber
})