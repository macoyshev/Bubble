
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-button')
// let width = document.documentElement.clientWidth;
// let height = document.documentElement.clientHeight;
let side1 = document.querySelector(".side1")
let button_back = document.querySelector('.button-back-hide')
let bubbles = document.querySelector('.bubbles')


window.addEventListener("mousemove", cursor)

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link=>{
  link.addEventListener('mouseover', ()=>{
    mouseCursor.classList.add('link-grow')
    link.classList.add('hover-link')
  });
  link.addEventListener('mouseleave', ()=>{
    mouseCursor.classList.remove('link-grow')
    link.classList.remove('hover-link')
  });
});

step.onclick = () =>{
  bubbles.classList.add('bubbles-hide')
  button_back.classList.add('button-back')
  side1.classList.add('side1-hide')
}

back.onclick = () => {
  bubbles.classList.remove('bubbles-hide')
  button_back.classList.remove('button-back')
  side1.classList.remove('side1-hide')

}