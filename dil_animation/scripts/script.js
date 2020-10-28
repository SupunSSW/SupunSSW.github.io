const container = document.querySelector('.container');
const card = document.querySelector('.card');
const name = document.querySelector('.body p');
const image = document.querySelector('.header img');
const btn = document.querySelector('.switch button');

image.style.transform = "rotateZ(-10deg)";

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "zoom";
    name.style.transform = "translateZ(120px) scale(1.1)";
    image.style.transform = "translateZ(150px) rotateZ(0deg) scale(1.1)";
    btn.style.transform = "translateZ(100px)"
});

container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = "all 0.75s ease";
    image.style.transform = "rotateZ(-15deg)";
});

function switchContent() {
    console.log('caller');
}