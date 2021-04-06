let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elBtn = document.querySelector('.js-btn');
let elOutput = document.querySelector('.js-warning-output');
let elUrunishlarSoni = document.querySelector('.js-urunishlar-soni');
let elArrOutput = document.querySelector('.js-urunishlar');

let urunishlarSoni = 6;
let blankArray = [];

var compNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  
  let elUserNumber = Number(elInput.value);

  if(elUserNumber === compNumber ) {
    elInput.disabled = true;
    elBtn.disabled = true;
    elOutput.textContent = `Topdingiz`;
    elInput.value = '';
    return;
  }

  elUrunishlarSoni.textContent = --urunishlarSoni;
  if(urunishlarSoni === 0) {
    elInput.disabled = true;
    elBtn.disabled = true;
    elOutput.textContent = `Qayta urunib koring`;
    elInput.value = '';
    return;
  }

  elUrunishlarSoni.classList.add('h4');

  blankArray.push(elUserNumber);
  elUrunishlarSoni.textContent = blankArray.join(' ');

  elOutput.classList.add('h4', 'text-danger');

  if(elUserNumber > compNumber ){
    elOutput.textContent = 'Kichikroq son kiriting...';
    elInput.value = ' ';
  } else if (elUserNumber < compNumber ) {
    elOutput.textContent = 'Kattaroq son kiriting...'
    elInput.value = ' ';
  } else {
    elOutput.textContent = 'Topdingiz';
    elInput.value = '';
  }

});