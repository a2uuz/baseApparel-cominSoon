// let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let button = document.getElementById('arrow');

button.addEventListener('click', () =>{
let form = document.getElementById('form');
let email = document.getElementById('email').value;
let text = document.getElementById('text');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


if (email.match(pattern)){
  form.classList.add('valid');
  form.classList.remove('invalid');
  // text.textContent = `Email adress is valid.`;
  // text.style.color = '#16f321';
  
}
else{
  form.classList.remove('valid');
  form.classList.add('invalid');
  text.textContent = `Please provide a valid email`;
  text.style.color = '#ff0000';
}

})
