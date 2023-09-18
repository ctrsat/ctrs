<?php
// Создаем запрос к ctrs.com.ua
$ctrsContent = file_get_contents('https://www.ctrs.com.ua/');

// Отправляем загруженное содержимое
echo $ctrsContent;
?>
