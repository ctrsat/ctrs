document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("login").value;
        const password = document.getElementById("password").value;

        // Проверка логина и пароля
        if (username === "ctrs" && password === "ctrs") {
            // Устанавливаем флаг аутентификации в Local Storage
            localStorage.setItem("authenticated", "true");

            // Перенаправляем пользователя на защищенную страницу
            window.location.href = "secure_page/secure_page.html";
        } else {
            alert("Неверный логин или пароль.");
        }
    });
});
