const form = document.querySelector("form")

form.addEventListener("submit", function(chai){
    chai.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    results.innerHTML = ""
    results.style.border = "1px solid #000"

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid <span>height</span>`
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid <span>weight</span>`
    } else {
        const BMI = (weight / ((height**2)/ 10000)).toFixed(2)
        results.innerHTML = `Your BMI index is <span>${BMI}</span>`
        const spantag = document.querySelector("span")
        spantag.style.color = "green"
    }
})