<?php
// Начинаем сессию, чтобы использовать сеансы для отслеживания авторизации
session_start();

// Учетные данные пользователей (замените на свои данные)
$users = array(
    'ctrs' => 'ctrs', // Логин => Пароль
);
	   <?php
        if (isset($error_message)) {
            echo '<p style="color: red;">' . $error_message . '</p>';
        }
        ?>
       
	   <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_username = $_POST["login"];
    $input_password = $_POST["password"];

    // Проверяем, существует ли введенный логин и пароль в массиве учетных данных
    if (isset($users[$input_username]) && $users[$input_username] === $input_password) {
        // Если пользователь найден, устанавливаем флаг сеанса
        $_SESSION["authenticated"] = true;
        // Далее, вы можете перенаправить пользователя на защищенную страницу или выполнить другие действия
        header("Location: secure_page.php");
        exit;
    } else {
        // Если авторизация не удалась, можно вывести сообщение об ошибке
        $error_message = "Неверный логин или пароль.";
    }
}
?>
