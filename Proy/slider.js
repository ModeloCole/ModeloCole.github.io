const slider = document.querySelector("#slider");
let slidersection = document.querySelectorAll('.slider_section');
let slidersectionlast = slidersection[slidersection.length - 1];

const btnleft = document.querySelector('#izq');
const btnright = document.querySelector('#der');
slider.insertAdjacentElement('afterbegin', slidersectionlast);
let intervalo;
function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider_section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.6s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Previous() {
    let slidersection = document.querySelectorAll('.slider_section');
    let slidersectionlast = slidersection[slidersection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.6s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slidersectionlast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
// setInterval(function () { Next(); }, 5000);

btnright.addEventListener('click', function () { Next(); console.log("izq");});
btnleft.addEventListener('click', function () { Previous(); console.log("Der");});

// const sliderio = document.querySelector('#uno');
// sliderio.addEventListener('click',()=>{
//     window.open('products.html','_blank');
// })
