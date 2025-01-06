document.addEventListener("DOMContentLoaded", () => {
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");
  
    Promise.all([
      audio1.play(),
      audio2.play()
    ])
      .then(() => {
        console.log("Both audio tracks are playing.");
      })
      .catch((err) => {
        console.error("Autoplay Blocked:", err);
        alert("Please click anywhere on the page to enable audio.");
        document.addEventListener("click", () => {
          audio1.play().then(() => console.log("Audio 1 is now playing."));
          audio2.play().then(() => console.log("Audio 2 is now playing."));
        });
      });
  });