const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function (button){
    button.addEventListener("click", function(chai){
        const color = chai.target.id
        console.log(color);
        switch (color) {
            case "gray":
                body.style.backgroundColor = color
                break;
            case "white":
                body.style.backgroundColor = color
                break;
            case "blue":
                body.style.backgroundColor = color
                break;
            case "yellow":
                body.style.backgroundColor = color
                break;
        
            default:
                body.style.backgroundColor = "white"
                break;
        }
    })
})