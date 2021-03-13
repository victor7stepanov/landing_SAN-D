function form_request() {
        var msg = $('#form-popup-call').serialize();
        $.ajax({
        type: 'POST',
          /*указываем путь до файла, при необходимости изменить*/
        url: 'https://optom.san-d.ru/php/sendCall.php',
        data: msg,
        success: function (data) {
          /*в случае успешной отправки закрываем модальное окно, показываем всплывашку Спасибо и чистим значения input*/
          $('.popup-fade').hide();
          $('#form-popup-call input.name').val('');
          $('#form-popup-call input.phone').val('');
          $('.popup-lead-fade').show();
        },
        error: function () {
            alert('Что-то пошло не так, попробуйте отправить ещё раз!');
             }
        });
        };