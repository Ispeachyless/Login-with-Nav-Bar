const inputs = document.querySelectorAll(".form-control");

inputs.forEach(input => {
  input.addEventListener('focus', AddClass);
  input.addEventListener('blur', RemoveClass);
});

function AddClass() {
  this.parentNode.parentNode.classList.add("focus");
}

function RemoveClass() {
  if (this.value === '') { 
    this.parentNode.parentNode.classList.remove("focus");
  }
}

