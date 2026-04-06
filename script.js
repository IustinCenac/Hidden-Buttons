function generateButtons() {
    const container = document.getElementById("container")
    container.innerHTML = ''
    let n = parseInt(document.getElementById("numar").value)
    let winnerButton = Math.floor(Math.random() * n) + 1
    
    for (let i = 1; i <= n; ++i) {
        let button = document.createElement("Button")
        button.textContent = "Button " + i
        button.style.margin = "5px"

        button.addEventListener("click", function() {
            buttonClicked(i, winnerButton, button, container)
        })
        
        container.appendChild(button)
    }
}

function buttonClicked(i, winnerButton, button, container) {
    if (i == winnerButton) {
        alert("Buton castigator!")
        button.style.backgroundColor = "green"

        container.querySelectorAll("button").forEach(button => {
            if (button.textContent !== "Button " + winnerButton) {
                button.style.backgroundColor = "red"
            }
        })
        
    } else {
        alert("Buton necastigator")
        button.style.backgroundColor = "red"
    } 
}