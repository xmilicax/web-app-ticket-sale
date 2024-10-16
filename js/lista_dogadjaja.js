import config from '../config.js';

$(function() {
    let settings = {
        "url": config.baseUrl + config.endpoints.dogadjaj + "?apitoken=" + config.apiToken,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        'success': function(response){
            console.log("lokacija_id: "+ localStorage.getItem("lokacijaID"))

            localStorage.setItem("LOKACIJA", localStorage.getItem("lokacijaID"))
            $('.lokacijaID a').on('click', function () {
                localStorage.setItem("LOKACIJA", localStorage.getItem("lokacijaID"))
            });


            console.log(localStorage.getItem("LOKACIJA"));
            response.forEach((element, index) => {
                element.dogadjaji.forEach((dogadjaj) => {
                    if (parseInt(element.id) === parseInt(localStorage.getItem("lokacijaID"))) {

                        $('#dogadjaji').append(
                            '<tr>'
                            + '<td>' + dogadjaj.naslov + '</td>'
                            + '<td class="lokacijaID">'
                            +   '<a href="detalji.html?id=' + (element.id ? element.id : '') + '">' + (element.naziv ? element.naziv : '/') + '</a>'
                            + '</td>'                            + '<td>' + dogadjaj.kratakOpis + '</td>'
                            + '<td>' + dogadjaj.trajanje + '</td>'
                            + '<td>' + dogadjaj.opis + '</td>'
                            + '</tr>'
                        );
                    }
                });
            });


        },
        'error': function (response){
            console.log(response);
        }
    };
    $.ajax(settings)
})