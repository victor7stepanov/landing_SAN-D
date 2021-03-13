		//ОТПРАВКА ФОРМЫ

function form_request_form4() {
	var msg = $('#form4').serialize();
	$.ajax({
	type: 'POST',
	/*указываем путь до файла, при необходимости изменить*/
	url: 'https://optom.san-d.ru/php/sendPartner.php',
	data: msg,
	success: function (data) {
	/*в случае успешной отправки показываем всплывашку Спасибо и чистим значения input, блокируя кнопку Отправить*/
	$('.partner-form input.name').val('');
	$('.partner-form input.phone').val('');
	$('.partner-form input.email').val('');
	$(document).ready ( function(){ $('.form-partner-btn').text('Отправлено'); });
	$('.form-partner-btn').attr('disabled','disabled');
	$('.popup-lead-fade').show();
	},
	error: function () {
	alert('Что-то пошло не так, попробуйте отправить ещё раз!');
	}
	});
};

function form_request_form3() {
	var msg = $('#form3').serialize();
	$.ajax({
	type: 'POST',
	/*указываем путь до файла, при необходимости изменить*/
	url: 'https://optom.san-d.ru/php/sendAccess.php',
	data: msg,
	success: function (data) {
	/*в случае успешной отправки показываем всплывашку Спасибо и чистим значения input, блокируя кнопку Отправить*/
	$('.access-form input.name').val('');
	$('.access-form input.phone').val('');
	$('.access-form input.email').val('');
	$(document).ready ( function(){ $('.form-access-btn').text('Отправлено'); });
	$('.form-access-btn').attr('disabled','disabled');
	$('.popup-lead-fade').show();
	},
	error: function () {
	alert('Что-то пошло не так, попробуйте отправить ещё раз!');
	}
	});
};

function form_request_form2() {
	var msg = $('#form2').serialize();
	$.ajax({
	type: 'POST',
	/*указываем путь до файла, при необходимости изменить*/
	url: 'https://optom.san-d.ru/php/sendPrice.php',
	data: msg,
	success: function (data) {
	/*в случае успешной отправки показываем всплывашку Спасибо и чистим значения input, блокируя кнопку Отправить*/
	$('.price-form input.name').val('');
	$('.price-form input.phone').val('');
	$('.price-form input.email').val('');
	$(document).ready ( function(){ $('.form-price-btn').text('Отправлено'); });
	$('.form-price-btn').attr('disabled','disabled');
	$('.popup-lead-fade').show();
	},
	error: function () {
	alert('Что-то пошло не так, попробуйте отправить ещё раз!');
	}
	});
};

function form_request_form1() {
	var msg = $('#form1').serialize();
	$.ajax({
	type: 'POST',
	/*указываем путь до файла, при необходимости изменить*/
	url: 'https://optom.san-d.ru/php/sendSale.php',
	data: msg,
	success: function (data) {
	/*в случае успешной отправки показываем всплывашку Спасибо и чистим значения input, блокируя кнопку Отправить*/
	$('.autoparts-form input.name').val('');
	$('.autoparts-form input.phone').val('');
	$('.autoparts-form input.email').val('');
	$(document).ready ( function(){ $('.autoparts-form__btn').text('Отправлено'); });
	$('.autoparts-form__btn').attr('disabled','disabled');
	$('.popup-lead-fade').show();
	},
	error: function () {
	alert('Что-то пошло не так, попробуйте отправить ещё раз!');
	}
	});
};