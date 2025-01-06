document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("mainVideo");
  const fullscreenButton = document.getElementById("fullscreenButton");

  // Existing audio logic (keep your audio code as is)
  const audio1 = document.getElementById("audio1");
  const audio2 = document.getElementById("audio2");

  audio1.volume = 0.5; // Example volume adjustment
  audio2.volume = 0.3;

  Promise.all([
    audio1.play(),
    audio2.play()
  ])
    .then(() => {
      console.log("Both audio tracks are playing.");
    })
    .catch((err) => {
      console.error("Autoplay Blocked:", err);
      document.addEventListener("click", () => {
        audio1.play();
        audio2.play();
      });
    });

  // Fullscreen logic for the video
  fullscreenButton.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen(); // Standard Fullscreen API
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen(); // iOS Safari
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen(); // Older IE/Edge
    } else {
      console.log("Fullscreen API is not supported.");
    }
  });
});
