const images = document.querySelectorAll('.carousel__item');
let currentIndex = 0;
const total = images.length;

function updateCarousel() {
  images.forEach((img, index) => {
    img.style.opacity = '0';
    img.style.zIndex = '0';
    img.style.transform = 'scale(0.8)';
    img.style.filter = 'blur(8px)';
  });

  const positions = [
    { offset: -2, transform: 'translateX(-350px) scale(0.7) rotateY(30deg)', blur: '8px', z: 1 },
    { offset: -1, transform: 'translateX(-180px) scale(0.85) rotateY(15deg)', blur: '4px', z: 2 },
    { offset: 0,  transform: 'translateX(0px) scale(1) rotateY(0deg)', blur: '0px', z: 3 },
    { offset: 1,  transform: 'translateX(180px) scale(0.85) rotateY(-15deg)', blur: '4px', z: 2 },
    { offset: 2,  transform: 'translateX(350px) scale(0.7) rotateY(-30deg)', blur: '8px', z: 1 },
  ];

  positions.forEach(pos => {
    let idx = (currentIndex + pos.offset + total) % total;
    let img = images[idx];
    img.style.opacity = '1';
    img.style.transform = pos.transform;
    img.style.filter = `blur(${pos.blur})`;
    img.style.zIndex = pos.z;
  });
}

updateCarousel();

setInterval(() => {
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
}, 3000);