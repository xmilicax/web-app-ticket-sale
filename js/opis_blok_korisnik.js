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
        { name: 'blagajnik', value: 0 }
    ];

    $.ajax(lista_korisnika).done(function(response) {
        response.forEach((element, index) => {
            if(element.uloga.id === 4)
                uloge[0].value++;
        });

        $('table > tbody > tr:first-of-type > td:last-of-type').append('<a href="../korisnik/blok_korisnik.html">' + uloge[0].value + '</a>');
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
        const element = response[3];
        $('tbody').append(
            '<tr>'
            + '<td>' + element.id + '</td>'
            + '<td>' + element.naziv + '</td>'
            + '<td>' + element.opis + '</td>'
            + '<td>' + '</td>'
            +'</tr>'
        )
    });
})