const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();



const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burgerMenu')

burgerButton.addEventListener('click', showHide)

function showHide(){
  if (menu.classList.contains('is-active')){
    menu.classList.remove('is-active')

  } else{
    menu.classList.add('is-active')
  }
}
