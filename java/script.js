// Получаем элементы видеоплеера и видеофайлов
var videoPlayer = document.getElementById("video-player");
var videoSources = [
  "video/1.mp4",
  "video/2.mp4",

];
var currentVideoIndex = 0;

// Функция для воспроизведения следующего видео
function playNextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex >= videoSources.length) {
    currentVideoIndex = 0;
  }
  videoPlayer.src = videoSources[currentVideoIndex];
  videoPlayer.load();
  videoPlayer.play();
}

// Начинаем воспроизведение первого видео
videoPlayer.src = videoSources[currentVideoIndex];
videoPlayer.load();
videoPlayer.play();

// Слушаем событие окончания воспроизведения и переключаемся на следующее видео
videoPlayer.addEventListener("ended", function () {
  // Задержка перед переключением на следующее видео (в миллисекундах)
  var delay = 1; // Например, 2 секунды

  setTimeout(function () {
    playNextVideo();
  }, delay);
});


