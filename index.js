function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector("#start").addEventListener("click", startChangeColor);
let remove;
function startChangeColor() {
    remove = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
        document.querySelector(".hex-code").innerHTML = randomColor();
    }, 1500);

}
document.querySelector("#stop").addEventListener("click", stopChangeColor);
function stopChangeColor() {
    clearInterval(remove);
}