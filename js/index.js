const carCards = document.querySelectorAll('.car_card');

carCards.forEach(card => {
  const video = card.querySelector('.edit_video');

  card.addEventListener('mouseenter', () => {
    
    video.play(); // Videoni ijro etish
    video.volume = 1.0; // Ovoz balandligini sozlash
  });

  card.addEventListener('mouseleave', () => {
    video.pause(); // Videoni to‘xtatish
    video.currentTime = 0; // Videoni boshidan boshlash uchun vaqtni qaytarish
    video.style.display = 'none'; // Videoni yashirish
  });
});
