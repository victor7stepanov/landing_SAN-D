<?php

/* Здесь мы проверяем существуют ли переменные, которые передала форма обратной связи. Если не существуют, то мы их создаем */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}


/* Здесь необходимо вписать ваш e-mail адрес */
$address = "sale5@san-d.ru, sale1@san-d.ru, marketing@avtopartner73.ru, market@san-d.ru, neskoryuli@mail.ru";

$fromEmail = 'robot@san-d.ru';

/* Здесь вписуете тему, которая будет отображаться в теме письма */
$sub = "Лендинг. Контакты и сообщение";

$date=date("H:i d.m.y");

/* А здесь прописываете сам текст сообщения, который будет Вам отправлен. Если Вам необходимо начать новую строку необходимо поставить \n */
$mes = "Имя: $name \nТелефон: $phone \nЭл.почта: $email \nСообщение: $message \nВремя и дата отправки сообщения: $date";

/* А это функция, как раз занимается отправкой письма на указанный выше адрес */
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$fromEmail");

?>