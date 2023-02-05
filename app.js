const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav  = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

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

const app = () =>{
    navSlide()
}


app()