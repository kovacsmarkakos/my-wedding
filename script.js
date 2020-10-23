// Arrow script
let arrow = document.querySelector('.arrow-down');
let el = document.querySelector('#main');

arrow.addEventListener('click', function () {
  el.scrollIntoView({ behavior: 'smooth' });
});

// Lightbox script
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const img = document.querySelector('#konvoj');
img.addEventListener('click', () => {
  lightbox.classList.add('active');
  const newImg = document.createElement('img');
  newImg.src = img.src;
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }
  lightbox.appendChild(newImg);
});

// Close lightbox only when clicked outside of img
lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
