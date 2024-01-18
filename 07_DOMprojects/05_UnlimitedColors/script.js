let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
const bg = document.querySelector('main');

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 16)
        color += hex[randomNum]
    }
    return color
}

let intervalId;
const startChangingColor = () => {
    function changeBgColor() {
        bg.style.backgroundColor = randomColor();
    }

    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
}

const stopChangingColor = () => {
    clearInterval(intervalId);
    bg.style.backgroundColor = '#1c1c1c';
    intervalId = null;
}

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);