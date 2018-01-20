//Define UI elements
const modal = document.querySelector('.simpleModal');
const modalBtn = document.querySelector('.modalBtn');
const closeBtn = document.querySelector('.closeBtn');

// Listen for open  click
modalBtn.addEventListener('click', openModal);
// Listen for close  click
closeBtn.addEventListener('click', closeModal);
//Listen for click outside of modal
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close modal if user clicks outside modal container
function outsideClick(e) {
    if(e.target === modal) {app
        modal.style.display = 'none';
    }
}
