const loaderContainer = document.querySelector('.loader-container');
const mainContainer = document.querySelector('#main-container');
const navContainer = document.querySelector('#nav-container');
loaderContainer.classList.remove('hidden'); 

setTimeout(() => {
  loaderContainer.classList.add('hidden'); 
  mainContainer.classList.remove('hidden');
  navContainer.classList.remove('hidden'); 
}, 2000);



