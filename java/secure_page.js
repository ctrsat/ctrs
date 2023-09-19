// Функция для создания падающей надписи "Citrus"
function createFallingText() {
    const text = document.createElement('div');
    text.className = 'falling-text';
    text.textContent = 'Citrus';
    text.style.left = `${Math.random() * 100}vw`; // Случайное положение по горизонтали
    document.body.appendChild(text);

    // Удаление надписи после завершения анимации
    text.addEventListener('animationiteration', () => {
        document.body.removeChild(text);
    });
}

// Создание падающей надписи "Citrus" каждую секунду
setInterval(createFallingText, 1000);
