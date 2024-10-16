import config from '../config.js';

$(function(){

    let settings = {
        "url": config.baseUrl + config.endpoints.korisnik + "?apitoken=" + config.apiToken,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        'dataType': "json",
        'success': function (response) {
            $('#id').val(localStorage.getItem('userid'))
            $('#imeprezime').val(localStorage.getItem('username'))
            $('#telefon').val(localStorage.getItem('userphone'))
            $('#email').val(localStorage.getItem('useremail'))
            $('#uloge').val(localStorage.getItem('userroleid'))
            $('#lokacije').val(localStorage.getItem('userlocation'))
        },
        'error': function (response) {
            console.log(response);
        }
    }
    $.ajax(settings);


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
    // odmah po učitavanju stranice proverava uslove
    $(document).ready(function() {
        if ((localStorage.getItem('userroleid')) === "2")
            $('#lokacije').show();
        else
            $('#lokacije').hide();
    });

    $('#uloge').on('change', function(e) {
        if ($('#uloge').val() === "2")
            $('#lokacije').show();
        else
            $('#lokacije').hide();
    });

    $('#forma').on('submit', function (e) {
        e.preventDefault();

        let potvrda = $('#potvrda');
        let greska = $('#greska');

        $.ajax({
            "url": config.baseUrl + config.endpoints.korisnik + localStorage.getItem("userid"),
            "method": "PATCH",
            "timeout": 0,
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            "data": {
                "name": $('#imeprezime').val(),
                "email": $('#email').val(),
                "phone": $('#telefon').val(),
                "password": $('#lozinka').val(),
                "userRoleId": parseInt($("#uloge").val()),
                "locationId": parseInt($("#lokacije").val()),
                "apitoken": $('meta[name="apitoken"]').attr("content")
            },
            "success": function (response) {
                console.log(response);
                greska.hide();
                potvrda.show();
                potvrda.html("Измена је сачувана.");
                setTimeout(function() {
                    window.location = 'lista_korisnika.html';
                }, 1800);
            },
            "error": function (response) {
                console.log(response);
                greska.show();
                greska.html(response.responseJSON.message);
            }
        })
    })

});