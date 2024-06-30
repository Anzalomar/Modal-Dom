
const showModal =document.querySelectorAll('.show-modal');
const Modal =document.querySelector('.modal');
const closeModal =document.querySelector('.close-modal');
const overlay =document.querySelector('.overlay');
for (i =0; i< showModal.length; i++){  
showModal[i].addEventListener("click", openModal);
}
function openModal(){
    Modal.classList.remove('hidden') 
    overlay.classList.remove('hidden') 
}
closeModal.addEventListener("click", close);
function close(){
    Modal.classList.add('hidden'); 
    overlay.classList.add('hidden'); 
}
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !Modal.classList.contains('hidden')){
        Modal.classList.add('hidden'); 
        overlay.classList.add( 'hidden'); 
    }
});

   
