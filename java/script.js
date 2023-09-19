// Получаем элементы видеоплеера и видеофайлов
var videoPlayer = document.getElementById("video-player");
var videoSources = [
  "video/1.mp4",
  "video/2.mp4"
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
  var delay = 1000; // Например, 1 секунда

  setTimeout(function () {
    playNextVideo();
  }, delay);
});

// Получаем ссылку и фоновое видео по их id
var siteLink = document.getElementById("site-link");
var backgroundVideo = document.getElementById("myVideo"); // Измените id, если необходимо

// Добавляем обработчик события клика к фоновому видео
backgroundVideo.addEventListener("click", function() {
  // Перенаправляем пользователя на сайт CTRS при клике
  window.location.href = "https://www.ctrs.com.ua/";
});
