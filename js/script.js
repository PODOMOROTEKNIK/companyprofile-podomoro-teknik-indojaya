/* ===========================
BACK TO TOP
=========================== */

const backToTop = document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        backToTop.style.display="block";
    }else{
        backToTop.style.display="none";
    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

}
/* ==========================
MOBILE MENU
========================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if(menuToggle && nav){

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}

/* ==========================
SEARCH PRODUCT
========================== */

const search = document.getElementById("searchProduct");

if(search){

search.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const products=document.querySelectorAll(".product-item");

products.forEach(product=>{

const text=product.innerText.toLowerCase();

if(text.includes(keyword)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}

/* ==========================
COUNTER
========================== */

const counters=document.querySelectorAll(".count");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=Math.ceil(target/100);

if(current<target){

counter.innerText=current+increment;

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});

/*==============================
HERO SLIDER
==============================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if(slides.length > 0){

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,5000);

}

/*==============================
FILTER PRODUCT
==============================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const productItems=document.querySelectorAll(".product-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

productItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else{

item.style.display=

item.dataset.category===filter

?

"block"

:

"none";

}

});

});

});
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

});

/*==============================
STICKY NAVBAR
==============================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*==============================
PROGRESS BAR
==============================*/

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progressBar").style.width=progress+"%";

});

/*==============================
REVEAL
==============================*/

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSection);

revealSection();

/*==============================
LIGHTBOX
==============================*/

const images = document.querySelectorAll(".product-image img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

}
/* ===========================
BACK TO TOP
=========================== */

const backToTop = document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        backToTop.style.display="block";
    }else{
        backToTop.style.display="none";
    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

}
/* ==========================
MOBILE MENU
========================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if(menuToggle && nav){

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}

/* ==========================
SEARCH PRODUCT
========================== */

const search = document.getElementById("searchProduct");

if(search){

search.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const products=document.querySelectorAll(".product-item");

products.forEach(product=>{

const text=product.innerText.toLowerCase();

if(text.includes(keyword)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}

/* ==========================
COUNTER
========================== */

const counters=document.querySelectorAll(".count");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=Math.ceil(target/100);

if(current<target){

counter.innerText=current+increment;

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});

/*==============================
HERO SLIDER
==============================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if(slides.length > 0){

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,5000);

}

/*==============================
FILTER PRODUCT
==============================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const productItems=document.querySelectorAll(".product-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

productItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else{

item.style.display=

item.dataset.category===filter

?

"block"

:

"none";

}

});

});

});
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

});

/*==============================
STICKY NAVBAR
==============================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*==============================
PROGRESS BAR
==============================*/

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progressBar").style.width=progress+"%";

});

/*==============================
REVEAL
==============================*/

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSection);

revealSection();

/*==============================
LIGHTBOX
==============================*/

const images = document.querySelectorAll(".product-image img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});