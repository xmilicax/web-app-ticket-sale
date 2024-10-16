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
        'success': function(response) {

            let lista_lokacija = {
                "url": config.baseUrl + config.endpoints.lokacija + "?apitoken=" + config.apiToken,
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
            };

            $.ajax(lista_lokacija).done(function (locationResponse) {
                console.log(locationResponse)
                response.forEach((element) => {
                    if (element.uloga.naziv === "благајник") {
                        let matchingLocations = locationResponse.filter((location) => location.id === element.lokacija.id);
                        if (matchingLocations.length > 0 && matchingLocations[0].dogadjaji.length > 0) {
                            let eventCount = matchingLocations[0].dogadjaji.length;
                            $('#dogadjaji_' + element.id).html('<a href="../lokacija/lista_dogadjaja.html?id=' + element.lokacija.id + '">' + eventCount + '</a>');
                            $('#dogadjaji_' + element.id + ' a').on('click', function() {
                                localStorage.setItem("lokacijaID", element.lokacija.id);
                            });
                        }
                    } else {
                        $('#dogadjaji_' + element.id).text('/');
                    }
                    $('#lokacija').on('click', function (e){
                        localStorage.setItem("lokacija_ID", element.lokacija.id);
                    });
                });
            });

            response.forEach((element, index) => {
                if (element.uloga.naziv === 'благајник') {
                    $('tbody').append(
                        '<tr>'
                        + '<td>' + element.id + '</td>'
                        + '<td>' + element.imePrezime + '</td>'
                        + '<td>' + element.email + '</td>'
                        + '<td>' + (element.telefon ? element.telefon : '/') + '</td>'
                        + '<td id="lokacija">' + (element.lokacija ? '<a href="/lokacija/detalji.html?id=' + element.lokacija.id + '">' + element.lokacija.naziv + '</a>' : '/') + '</td>'
                        + '<td>' + '<a href="../uloga/' + element.uloga.naziv + '.html">' + element.uloga.naziv + '</a></td>'
                        + '<td id="dogadjaji_' + element.id + '"></td>'
                        + '<td>'
                        + '<div>'
                        + '<button class="izmeni" data_id="' + element.id
                        + '" data_imeiprezime="' + element.imePrezime
                        + '" data_email="' + element.email
                        + '" data_telefon="' + element.telefon
                        + '" data_uloganaziv="' + element.uloga.id
                        + '"' + '>' + 'Измени'
                        + '</button>'
                        + '</div>'
                        + '<div>'
                        + '<button class="obrisi" data_id="' + element.id
                        + '" data_imeiprezime="' + element.imePrezime
                        + '" data_email="' + element.email
                        + '" data_telefon="' + element.telefon
                        + '" data_uloganaziv="' + element.uloga.id
                        + '"' + '>' + 'Обриши'
                        + '</button>'
                        + '</div>'
                        + '</td>'
                        + '</tr>')
                }
            });

            $('.izmeni').on('click', function (e){
                localStorage.setItem('userid', $(this).attr('data_id'))
                localStorage.setItem('username', $(this).attr('data_imeiprezime'))
                localStorage.setItem('useremail', $(this).attr('data_email'))
                localStorage.setItem('userphone', $(this).attr('data_telefon'))
                localStorage.setItem('userroleid', $(this).attr('data_uloganaziv'))

                window.location = '../izmena_korisnika.html?id=' + $(this).attr('data_id')
            });

            $('.obrisi').on('click', function(e) {
                var form = new FormData();

                let settings2 = {
                    "url": config.baseUrl + config.endpoints.korisnik + $(this).attr('data_id') + "?apitoken=" + config.apiToken,
                    "method": "DELETE",
                    "timeout": 0,
                    "headers": {
                        "Accept": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    },
                    "processData": false,
                    "mimeType": "multipart/form-data",
                    "contentType": false,
                    "data": form,
                    "dataType": "json"
                };
                $.ajax(settings2).done(function(response){
                    console.log(response);
                    location.reload();
                });
            });
        },
        'error': function (response){
            console.log(response);
        }
    };
    $.ajax(settings);
});