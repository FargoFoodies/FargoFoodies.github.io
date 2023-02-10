const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav  = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    const moon = document.querySelector('.Moon-Sun')
    const Theme = document.querySelector("theme-form")





    burger.addEventListener('click', ()=>{
        // toggle Nav
        nav.classList.toggle('nav-active')
        // Animate Links
        navLinks.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`
            }
        })

        // burger anumation
        burger.classList.toggle('toggle');
    })



    nav.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active')
      // Animate Links
      navLinks.forEach((link,index) =>{
          if(link.style.animation){
              link.style.animation = ''
          }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`
          }
      })

      // burger anumation
      burger.classList.toggle('toggle');
      
    })
}

// Contact Form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




// Carosel

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

var colorThemes = document.getElementById("dark");

// Store Theme
const storeTheme = function (isChecked){
  localStorage.setItem("isChecked", isChecked)
}
//Apply Theme
const setTheme = function(){
  const isItChecked = localStorage.getItem("isChecked");
  if(isItChecked === 'false'){
    colorThemes.checked = false
  }else{
    colorThemes.checked = true
  }


  // fall back for no has support
  document.documentElement.className = isItChecked;
}
// Store Theme
colorThemes.addEventListener('click', ()=>{
    storeTheme(colorThemes.checked);
  })




const app = () =>{
    navSlide()
}


app()


document.onload = setTheme();