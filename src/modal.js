const formBtnEl = document.querySelector(".register-form-btn")
const closeBtnEl = document.querySelector(".modal-close-btn")
const modalMenuEl = document.querySelector(".backdrop")
const closeModalBtnEl = document.querySelector(".modal-button")
const formRegiEl = document.querySelector(".register-form")
const bodyEl = document.body;

closeModalBtnEl.addEventListener('click', toggleModal)
formBtnEl.addEventListener('click', toggleModal) 
closeBtnEl.addEventListener('click', toggleModal)

formRegiEl.addEventListener('submit', function(event) {
  event.preventDefault();  
});

function toggleModal() {
    modalMenuEl.classList.toggle("is-open")

     if (modalMenuEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}