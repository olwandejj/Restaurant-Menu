function playAudio(id) {
  const audios = document.querySelectorAll("audio");

  // Pause all audio first
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  // Play selected audio
  const selectedAudio = document.getElementById(id);
  if (selectedAudio) {
    selectedAudio.play();
  }
}

// Filter by category
function filterCategory(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
  });
}

// Use browser's Speech Synthesis API
function speak(element) {
  const text = element.getAttribute('data-desc');
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.pitch = 1;
  utterance.rate = 1;
  speechSynthesis.cancel(); // stop previous
  speechSynthesis.speak(utterance);
}
