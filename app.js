const slider = document.getElementById('slider');
const right = document.getElementById('right');
const left = document.getElementById('left');

right.parentElement.classList.add('disabled');    // To disable hover + click
right.parentElement.classList.remove('disabled'); // To enable again

let index = 0;
const total = slider.children.length;

function updateButtons() {
  if (index >= total - 1) right.parentElement.classList.add('disabled');
  else right.parentElement.classList.remove('disabled');

  if (index <= 0) left.parentElement.classList.add('disabled');
  else left.parentElement.classList.remove('disabled');
}

right.onclick = () => {
  if (index < total - 1) {
    index++;
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateButtons();
  }
};

left.onclick = () => {
  if (index > 0) {
    index--;
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateButtons();
  }
};

updateButtons(); 
