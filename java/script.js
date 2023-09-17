// script.js
document.addEventListener('DOMContentLoaded', function () {
  const videoPlayer = document.getElementById('video-player');

  // Функция для запроса полноэкранного режима
  function openFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  // Открываем полноэкранный режим при загрузке страницы
  openFullscreen(videoPlayer);
});
