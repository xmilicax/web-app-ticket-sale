import config from 'config.js';

$(function(){
    $('#imeprezime').on('blur', function() {  // blur - kada element nije u fokusu
        let vrednost = $(this).val();
        let imeprezime = $('#greska_imeprezime');
        let sablon_imeprezime = /(?=^.{5,180}$)^[A-ZŠĐŽČĆ][a-zčćžđšž]+(?:[\s-][A-ZŠĐŽČĆ][a-zčćžđšž]+)+$|^[А-ЯЉЊЂЋ][а-яљњђћ]+(?:[\s-][А-ЯЉЊЂЋ][а-яљњђћ]+)+$/;
        // dužina stringa 5-180; prvo veliko slovo, ostalo samo mala slova;

        if (sablon_imeprezime.test(vrednost)) {
            $(this).css('outline', 'none');
            imeprezime.hide();
        }
        else {
            $(this).css('outline', '2px solid orange');
            imeprezime.html("Име и презиме нису унети у исправном облику.");
            imeprezime.show();
        }
    });

    $('#telefon').on('blur', function () {
        let vrednost = $(this).val();
        let telefon = $('#greska_telefon');
        let sablon_broj = /^[+][1-9][0-9][0-9]{7,12}$/;

        if (sablon_broj.test(vrednost) || vrednost  === '') {
            $(this).css('outline', 'none');
            telefon.hide();
        }
        else {
            $(this).css('outline', '2px solid orange');
            telefon.html("Телефон није унет у исправном облику.");
            telefon.show();
        }
    });

    $('#email').on('blur', function () {
        let vrednost = $(this).val();
        let email = $('#greska_email');
        let sablon_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (sablon_email.test(vrednost)) {
            $(this).css('outline', 'none');
            $('#greska_email').hide();
        }
        else {
            $(this).css('outline', '2px solid orange');
            email.html("Имејл адреса није унета у исправном облику.");
            email.show();
        }
    });

    $('#lozinka').on('blur', function () {
        let vrednost = $(this).val();
        let lozinka = $('#greska_lozinka')
        let sablon_lozinka = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,}$/;

        if (sablon_lozinka.test(vrednost)) {
            $(this).css('outline', 'none');
            lozinka.hide();
        }
        else {
            $(this).css('outline', '2px solid orange');
            lozinka.html("Лозинка није довољно јака.");
            lozinka.show();
        }
    });

    $('#ponovljenalozinka').on('blur', function () {
        let plozinka = $('#ponovljenalozinka');
        let ponovljenalozinka = $('#greska_ponovljenalozinka');
        let lozinka = $('#lozinka');

        if (plozinka.val() === lozinka.val()) {
            $(this).css('outline', 'none');
            ponovljenalozinka.hide();
        }
        else {
            $(this).css('outline', '2px solid orange');
            ponovljenalozinka.html("Лозинке се не поклапају.");
            ponovljenalozinka.show();
        }
    });

    $('#forma').on('submit', function (e) {
        e.preventDefault();
        let email = $('#email');
        let provera_email = $('#greska_email');
        let greska = $('#greska_registracija');

        if (email.val() === '') {
            email.css('outline', '2px solid orange');
            provera_email.html("Нисте унели имејл адресу.");
            provera_email.show();
        }

        let form = new FormData();   // koristili smo form.serialize() za uzimanje podataka iz forme
        form.append("name", $('#imeprezime').val());
        form.append("email", $('#email').val());
        form.append("phone", $('#telefon').val());
        form.append("password", $('#lozinka').val());
        form.append("apitoken", $('meta[name="apitoken"]').attr('content'));

        let settings = {
            "url": config.baseUrl + config.endpoints.register,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Accept": "application/json"
            },
            "processData": false,
            "mimeType": "mulipart/form-data",
            "contentType": false,
            "data": form,
            "dataType": 'json',
            "success": function(response){
                if(response.error !== undefined){
                    greska.html(response.error);
                    greska.show();
                    $('#email').val('');
                    console.log(greska.show());
                }
                else {
                    window.location = 'prijava.html';
                }
            },
            "error": function(response){
                greska.html(response.error);
                greska.show();
                $('#email').val('');
            }
        };
        console.log(greska);
        $.ajax(settings);
    });
});