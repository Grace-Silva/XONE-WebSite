// captura de elementos:
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// carrusel de imágenes:

const items = document.querySelectorAll(".sliderItem"); // todos los contenedores de imagenes

// botones de avance:
const leftArrow = document.getElementById("prev"); 
const rightArrow = document.getElementById("next");

    let index = 0;

    // ir hacia la derecha (siguiente):
    function next(){
        items[index].classList.remove("actual");
        index = (index+1) % items.length;
        items[index].classList.add("actual");
    } 

    // ir hacia la izquierda (anterior):
    function prev(){
        items[index].classList.remove("actual");
        index = (index-1+items.length) % items.length;
        items[index].classList.add("actual");
    }

    leftArrow.addEventListener("click", prev);
    rightArrow.addEventListener("click", next);