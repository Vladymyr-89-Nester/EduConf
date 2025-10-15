const formBtnEl = document.querySelector(".register-form-btn")
const closeBtnEl = document.querySelector(".modal-close-btn")
const modalMenuEl = document.querySelector(".backdrop")
const closeModalBtnEl = document.querySelector(".modal-button")
const formRegiEl = document.querySelector(".register-form")
const regInputEl = document.querySelector(".register-input")
const bodyEl = document.body;

closeModalBtnEl.addEventListener('click', toggleModal)
closeBtnEl.addEventListener('click', toggleModal)

formRegiEl.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputValue = regInputEl.value.trim();

  if (inputValue === '') {
    
    alert('The field cannot be empty!');
  } else {
    
    toggleModal();
  }
});

  
function toggleModal() {
    modalMenuEl.classList.toggle("is-open")

     if (modalMenuEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}