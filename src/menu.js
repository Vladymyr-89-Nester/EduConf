const burgerEl = document.querySelector(".burger-menu-header")
const closeBtnEl = document.querySelector(".menu-close-btn")
const mobMenuEl = document.querySelector(".burger-menu")
const bodyEl = document.body;

burgerEl.addEventListener('click', toggleModal) 
closeBtnEl.addEventListener('click', toggleModal)

function toggleModal() {
    mobMenuEl.classList.toggle("is-open")

     if (mobMenuEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}