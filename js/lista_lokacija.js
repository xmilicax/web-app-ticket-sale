import config from '../config.js';

$(function(){
    let settings = {
        "url": config.baseUrl + config.endpoints.lokacija + "?apitoken=" + config.apiToken,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        "success": function(response){
            console.log(response)
                localStorage.setItem('worktime', JSON.stringify(response))
                console.log(JSON.parse(localStorage.getItem('worktime')))


            response.forEach((element, index) => {
                function imeDana(id) {
                    switch (parseInt(id)) {
                        case 1:
                            return "Понедељак";
                        case 2:
                            return "Уторак";
                        case 3:
                            return "Среда";
                        case 4:
                            return "Четвртак";
                        case 5:
                            return "Петак";
                        case 6:
                            return "Субота"
                        case 7:
                            return "Недеља"
                        default:
                            return "неисправно";
                    }
                }
                function pretvori (x) {
                    let h = Math.floor(x/60);
                    let m = x%60;
                    // prikaz 09, umesto 9 za sate
                    if (h<10)
                        h = "0" + h;
                    //prikaz 00, umesto 0 za minute
                    if (m === 0)
                        m = "00";
                    else if (m>0 && m<10)
                        m = "0" + m;

                    //prikaz hh:mm
                    return h + ":" + m;
                }

                let zapis='';
                for (let i = 0; i < element.radnoVreme.length; i++) {
                    if (element.radnoVreme[i].od === null && element.radnoVreme[i].do === null) {
                        let Dan = imeDana(element.radnoVreme[i].dan);
                        let nullvr = 'нерадан дан';

                        zapis += '<br>' + '<b>' + Dan + '</b>' +'<br>' + nullvr + '<br>'

                    }
                    else {
                        let Dan = imeDana(element.radnoVreme[i].dan);
                        let Od = pretvori(element.radnoVreme[i].od);
                        let Do = pretvori(element.radnoVreme[i].do);

                        zapis += '<br>' + '<b>' + Dan + '</b>' +'<br>' + Od + '-' + Do + '<br>'
                    }
                }

                $('tbody').append(
                    '<tr>'
                        + '<td>' + element.id + '</td>'
                        + '<td>' + element.naziv + '</td>'
                        + '<td>' + element.grad + '</td>'
                        + '<td>' + element.adresa + '</td>'
                        + '<td>' + element.opis + '</td>'
                        + '<td>' + zapis + '<br>' + '</td>'
                        + '<td>' + element.blagajnici.length + '</td>'
                        + '<td>' + element.dogadjaji.length + '</td>'
                        + '<td>'
                            + '<button class="izmeni" data_id="' + element.id
                                + '" data_naziv="' + element.naziv
                                + '" data_grad="' + element.grad
                                + '" data_adresa="' + element.adresa
                                + '" data_opis="' + element.opis
                                + '" data_blagajnici="' + element.blagajnici
                                + '" data_dogadjaji="' + element.dogadjaji
                                + '"' + '>' + 'Измени'
                            + '</button>'
                            +  '<br>'
                            + '<button class="obrisi" data_id="' + element.id
                                + '" data_naziv="' + element.naziv
                                + '" data_grad="' + element.grad
                                + '" data_adresa="' + element.adresa
                                + '" data_opis="' + element.opis
                                + '" data_blagajnici="' + element.blagajnici
                                + '" data_dogadjaji="' + element.dogadjaji
                                + '"' + '>' + 'Обриши'
                            + '</button>'
                        + '</td>'
                    + '</tr>'
                )
            })


            $('.izmeni').on('click', function (e){
                localStorage.setItem('locationid', $(this).attr('data_id'))
                localStorage.setItem('locationname', $(this).attr('data_naziv'))
                localStorage.setItem('locationcity', $(this).attr('data_grad'))
                localStorage.setItem('locationadress', $(this).attr('data_adresa'))
                localStorage.setItem('locationcaption', $(this).attr('data_opis'))

                window.location = 'izmena_lokacije.html?id=' + $(this).attr('data_id')
            })

            $('.obrisi').on('click', function(e) {
                var form = new FormData();

                let settings2 = {
                    "url": config.baseUrl + config.endpoints.lokacija + $(this).attr('data_id') + "?apitoken=" + config.apiToken,
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
            })
        },
        "error": function (response){
            console.log(response);
        }
    };
    $.ajax(settings)
})