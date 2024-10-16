import config from '../config.js';

$(function() {
    $('#forma').on('submit', function(e) {
        e.preventDefault();
        let greska = $('#provera_registracija');

        let form = new FormData();
        form.append("email", $('#email').val());
        form.append("password", $('#lozinka').val());
        form.append("apitoken", $('meta[name="apitoken"]').attr('content'));

        let settings = {
            "url": config.baseUrl + config.endpoints.login,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Accept": "application/json"
            },
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form,
            "dataType": "json",
            "success": function(response) {
                if (response.error !== undefined) {
                    $('#error').html(response.error);
                    $('#error').show();
                    $('#lozinka').val('');
                } else {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('type', response.type);
                    switch (localStorage.getItem("type")) {
                        case 'администратор':
                            window.location = 'user/administrator.html';
                            break;
                        case 'благајник':
                            window.location = 'user/blagajnik.html';
                            break;
                        case 'регистровани корисник':
                            window.location = 'user/reg_korisnik.html';
                            break;
                        case 'блокирани корисник':
                            window.location = 'user/blok_korisnik.html';
                            break;
                    }
                }
            },
            "error": function(xhr) {
                let response =JSON.parse(xhr.responseText);
                $('#error').html(response.error);
                $('#error').show();
                $('#lozinka').val('');
            }
            //xhr hvata odgovor, JSON.parse uzima JSON deo responseText-a (u njemu se nalazi tekst greska poruke)
        };

        $.ajax(settings);
    });
});
