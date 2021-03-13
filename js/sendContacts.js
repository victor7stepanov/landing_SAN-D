		//ОТПРАВКА ФОРМЫ

function form_request_contacts() {
	var msg = $('.contacts-form').serialize();
	$.ajax({
	type: 'POST',
	/*указываем путь до файла, при необходимости изменить*/
	url: 'https://optom.san-d.ru/php/sendContacts.php',
	data: msg,
	success: function (data) {
	/*в случае успешной отправки показываем всплывашку Спасибо и чистим значения input, блокируя кнопку Отправить*/
	$('.contacts-form input.name').val('');
	$('.contacts-form input.phone').val('');
	$('.contacts-form input.email').val('');
	$('.contacts-form input.message').val('');
	$(document).ready ( function(){ $('.contacts-form-btn').text('Отправлено'); });
	$('.contacts-form-btn').attr('disabled','disabled');
	$('.popup-lead-fade').show();
	},
	error: function () {
	alert('Что-то пошло не так, попробуйте отправить ещё раз!');
	}
	});
};