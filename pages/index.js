//declarations
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal__window');
const edit = document.querySelector('.profile__edit-button');
const name = document.querySelector('.profile__name');
const editName = document.querySelector('.edit_name');
const job = document.querySelector('.profile__job');
const editJob = document.querySelector('.edit_job');
const save = document.querySelector('.modal__save-button');
const close = document.querySelector('.modal__close-button');
//In the learning platform we were taught to use btn instead of button, so I am a little confused.


//changes modal display from 'none' to 'flex'; open modal 
// closes when `.modal__close-btn` or `.modal__save-button` are clicked
function modalDisplay() {
  modal.classList.toggle('modal');
}

//edit and apply changes to profile
//prevent default load upon clicking '.modal__save-button'
//call modalClose when '.modal__save-button' is clicked
function update(event) {
  name.textContent = editName.value;
  job.textContent = editJob.value;

  event.preventDefault();

  modalDisplay()
}

//open modal when '.profile__edit-button' is clicked
edit.addEventListener('click', modalDisplay);

//save and close when '.modal__save-button' is clicked
save.addEventListener('click',update);

//close modal when '.modal__close-button' or 'modal__save-button' are clicked
close.addEventListener('click', modalDisplay);