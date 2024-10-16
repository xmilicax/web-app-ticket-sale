import config from '../config.js';

$(function(){
    $('#imeprezime').on('blur', function() {
        let vrednost = $(this).val();
        let imeprezime = $('#greska_imeprezime');
        let sablon_imeprezime = /(?=^.{5,180}$)^[A-ZŠĐŽČĆ][a-zčćžđšž]+(?:[\s-][A-ZŠĐŽČĆ][a-zčćžđšž]+)+$|^[А-ЯЉЊЂЋЏ][а-яљњђћџ]+(?:[\s-][А-ЯЉЊЂЋЏ][а-яљњђћџ]+)+$/;
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

        if (sablon_broj.test(vrednost) || vrednost  == '') {
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

    let lista_uloga = {
        "url": config.baseUrl + config.endpoints.uloga + "?apitoken=" + config.apiToken,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    };

    $.ajax(lista_uloga).done(function (response){
        response.forEach((element, index) => {
            $('#uloge').append('<option value="' + element.id + '">' + element.naziv + '</option>')
            if (element.naziv === "благајник")
                $('#uloge').val(element.id);
        })
    });

    let lista_lokacija = {
        "url": config.baseUrl + config.endpoints.lokacija + "?apitoken=" + config.apiToken,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    };

    $.ajax(lista_lokacija).done(function (response){
        response.forEach((element, index) => {
            $('#lokacije').append('<option value="' + element.id + '">' + element.naziv + '</option>')
        })
    });

    $('#uloge').on('change', function(e) {
        if ($('#uloge').val() === "2")
            $('#lokacije').show();
        else
            $('#lokacije').hide();
    });


    $('#forma').on('submit', function (e) {
        e.preventDefault();
        let email = $('#email');
        let greska_email = $('#greska_email');
        let greska = $('#greska');
        let potvrda = $('#potvrda');

        if (email.val() === '') {
            email.css('outline', '2px solid orange');
            greska_email.html("Нисте унели имејл адресу.");
            greska_email.show();
        }


        let form = new FormData();
        form.append("name", $('#imeprezime').val());
        form.append("email", $('#email').val());
        form.append("phone", $('#telefon').val());
        form.append("password", $('#lozinka').val());
        form.append("userRoleId", $('#uloge').val());
        form.append("locationId", $('#lokacije').val());
        form.append("apitoken", $('meta[name="apitoken"]').attr('content'));

        let settings = {
            "url": config.baseUrl + config.endpoints.korisnik + "?apitoken=" + config.apiToken,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form,
            "dataType":'json',
            "success": function(response) {
                if (response.error !== undefined && response.responseJSON !== undefined) {
                    greska.html(response.responseJSON.message);
                    greska.show();
                    $('#lozinka').val('');
                    $('#ponovljenalozinka').val('');
                } else {
                    potvrda.html("Налог је креиран.");
                    potvrda.show();
                    setTimeout(function() {
                        window.location = 'administrator.html';
                    }, 5000);
                }
            },
            "error": function(response) {
                console.log("ERROR: " + JSON.stringify(response));
                if (response.responseJSON !== undefined) {
                    greska.html(response.responseJSON.message);
                } else {
                    greska.html("Дошло је до грешке, молимо покушајте поново.");
                }
                greska.show();
                $('#lozinka').val('');
                $('#ponovljenalozinka').val('');
            }

        };
        $.ajax(settings)
    })
});