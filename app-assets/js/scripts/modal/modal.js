let modalDisplay = document.querySelector('.modal__display__none');
let editEmployeeData = document.querySelector('.EditEmployeeData');
let cancelModal = document.querySelector('.CancelModal');


editEmployeeData.addEventListener('click', () => {
    document.body.classList.add('background__black__with__opacity');
    modalDisplay.style.display = 'block'
})

cancelModal.addEventListener('click', () => {
    document.body.classList.remove('background__black__with__opacity');
    modalDisplay.style.display = 'none';
})