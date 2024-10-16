import config from '../config.js';

$(function(){
    let lista_korisnika = {
        "url": config.baseUrl + config.endpoints.korisnik + "?apitoken=" + config.apiToken,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    };

    let uloge = [
        { name: 'administrator', value: 0 },
        { name: 'blagajnik', value: 0 },
        { name: 'reg_korisnik', value: 0 },
        { name: 'blok_korisnik', value: 0 }
    ];

    $.ajax(lista_korisnika).done(function(response) {
        response.forEach((element, index) => {
            if(element.uloga.id === 1){
                uloge[0].value++;
            }
            else if(element.uloga.id === 2){
                uloge[1].value++;
            }
            else if(element.uloga.id === 3){
                uloge[2].value++;
            }
            else if(element.uloga.id === 4){
                uloge[3].value++;
            }
        });

        $('table > tbody > tr:first-of-type > td:last-of-type').append('<a href="../korisnik/administrator.html">' + uloge[0].value + '</a>');
        $('table > tbody > tr:nth-of-type(2) > td:last-of-type').append('<a href="../korisnik/blagajnik.html">' + uloge[1].value + '</a>');
        $('table > tbody > tr:nth-of-type(3) > td:last-of-type').append('<a href="../korisnik/reg_korisnik.html">' + uloge[2].value + '</a>');
        $('table > tbody > tr:nth-of-type(4) > td:last-of-type').append('<a href="../korisnik/blok_korisnik.html">' + uloge[3].value + '</a>');
    });

    let settings = {
        "url": config.baseUrl + config.endpoints.uloga + "?apitoken=" + config.apiTokenW,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    };

    $.ajax(settings).done(function (response){
        response.forEach((element, index) => {
                $('tbody').append(
                    '<tr>'
                    + '<td>' + element.id + '</td>'
                    + '<td>' + element.naziv + '</td>'
                    + '<td>' + element.opis + '</td>'
                    + '<td>' + '</td>'
                    +'</tr>'
                )}
        )
    });
})