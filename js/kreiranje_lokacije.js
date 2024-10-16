import config from '../config.js';

$(function(){

    let radno_vreme = [
        { dan: '1', od: 0, do: 0 },
        { dan: '2', od: 0, do: 0 },
        { dan: '3', od: 0, do: 0 },
        { dan: '4', od: 0, do: 0 },
        { dan: '5', od: 0, do: 0 },
        { dan: '6', od: 0, do: 0 },
        { dan: '7', od: 0, do: 0 }
    ];


    $('#naziv').on('blur', function() {
        let vrednost = $(this).val();
    });

    $('#adresa').on('blur', function() {
        let vrednost = $(this).val();
    });

    $('#grad').on('blur', function() {
        let vrednost = $(this).val();
    });

    $('#uloga').on('blur', function() {
        let vrednost = $(this).val();
    });

    //svaki input tipa NUMBER ne prima vrednost manju od 0
    $('input[type="number"]').on('input', function() {

        if ($(this).val() < 0) {
            $(this).val('');
        }
    });

    //ponedeljak-------------------------------------------------------------------------
    $('#vreme_od_sati_1').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_min_1').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_sati_1').prop('disabled', true);
        } else {
            $('#vreme_do_sati_1').prop('disabled', false);
        }
        radno_vreme[0].od = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_od_min_1').on('change',function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_sati_1').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_min_1').prop('disabled', true);
        } else {
            $('#vreme_do_min_1').prop('disabled', false);
        }
        radno_vreme[0].od = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_sati_1').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_min_1').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[0].do = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_min_1').on('change', function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_sati_1').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[0].do = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    //utorak-----------------------------------------------------------------------------
    $('#vreme_od_sati_2').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_min_2').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_sati_2').prop('disabled', true);
        } else {
            $('#vreme_do_sati_2').prop('disabled', false);
        }
        radno_vreme[1].od = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_od_min_2').on('change',function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_sati_2').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_min_2').prop('disabled', true);
        } else {
            $('#vreme_do_min_2').prop('disabled', false);
        }
        radno_vreme[1].od = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_sati_2').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_min_2').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[1].do = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_min_2').on('change', function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_sati_2').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[1].do = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    //sreda-----------------------------------------------------------------------------
    $('#vreme_od_sati_3').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_min_3').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_sati_3').prop('disabled', true);
        } else {
            $('#vreme_do_sati_3').prop('disabled', false);
        }
        radno_vreme[2].od = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_od_min_3').on('change',function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_sati_3').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_min_3').prop('disabled', true);
        } else {
            $('#vreme_do_min_3').prop('disabled', false);
        }
        radno_vreme[2].od = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_sati_3').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_min_3').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[2].do = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_min_3').on('change', function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_sati_3').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[2].do = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    //cetvrtak-----------------------------------------------------------------------------
    $('#vreme_od_sati_4').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_min_4').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_sati_4').prop('disabled', true);
        } else {
            $('#vreme_do_sati_4').prop('disabled', false);
        }
        radno_vreme[3].od = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_od_min_4').on('change',function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_sati_4').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_min_4').prop('disabled', true);
        } else {
            $('#vreme_do_min_4').prop('disabled', false);
        }
        radno_vreme[3].od = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_sati_4').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_min_4').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[3].do = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_min_4').on('change', function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_sati_4').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[3].do = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    //petak-----------------------------------------------------------------------------
    $('#vreme_od_sati_5').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_min_5').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_sati_5').prop('disabled', true);
        } else {
            $('#vreme_do_sati_5').prop('disabled', false);
        }
        radno_vreme[4].od = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_od_min_5').on('change',function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_sati_5').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_min_5').prop('disabled', true);
        } else {
            $('#vreme_do_min_5').prop('disabled', false);
        }
        radno_vreme[4].od = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_sati_5').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_min_5').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[4].do = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_min_5').on('change', function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_sati_5').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[4].do = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    //subota-----------------------------------------------------------------------------
    $('#vreme_od_sati_6').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_min_6').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_sati_6').prop('disabled', true);
        } else {
            $('#vreme_do_sati_6').prop('disabled', false);
        }
        radno_vreme[5].od = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_od_min_6').on('change',function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_sati_6').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_min_6').prop('disabled', true);
        } else {
            $('#vreme_do_min_6').prop('disabled', false);
        }
        radno_vreme[5].od = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_sati_6').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_min_6').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[5].do = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_min_6').on('change', function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_sati_6').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[5].do = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    //nedelja-----------------------------------------------------------------------------
    $('#vreme_od_sati_7').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_min_7').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_sati_7').prop('disabled', true);
        } else {
            $('#vreme_do_sati_7').prop('disabled', false);
        }
        radno_vreme[6].od = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_od_min_7').on('change',function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_od_sati_7').val())
        if (x === "" || isNaN(x))
            x = 0

        if (input === "") {
            $('#vreme_do_min_7').prop('disabled', true);
        } else {
            $('#vreme_do_min_7').prop('disabled', false);
        }
        radno_vreme[6].od = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_sati_7').on('change', function() {
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_min_7').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[6].do = input * 60 + x

        console.log(JSON.stringify(radno_vreme))
    });

    $('#vreme_do_min_7').on('change', function(){
        let input = parseInt($(this).val());

        let x = parseInt($('#vreme_do_sati_7').val())
        if (x === "" || isNaN(x))
            x = 0

        radno_vreme[6].do = input + 60 * x

        console.log(JSON.stringify(radno_vreme))
    });


    $('#forma').on('submit', function (e){
        e.preventDefault();
        console.log(JSON.stringify(radno_vreme))

        var settings = {
            "url": config.baseUrl + config.endpoints.lokacija,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "name": $('#naziv').val(),
                "address": $('#adresa').val(),
                "city": $('#grad').val(),
                "description": $('#uloga').val(),
                "workingHours": JSON.stringify(radno_vreme),
                "apitoken": $('meta[name="apitoken"]').attr('content'),
            },
            "success": function(response) {
                if (response.error !== undefined) {
                    $('#greska').html(response.error);
                    $('#greska').show();
                } else {
                    $('#potvrda').html("Измена је сачувана.");
                    $('#potvrda').show();
                    $('#greska').hide();

                    setTimeout(function() {
                        window.location = 'lista_lokacija.html';
                    }, 3000);
                }
            },
            "error": function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown)

                if (jqXHR && jqXHR.responseJSON) {
                    $('#greska').html(jqXHR.responseJSON.message);
                } else {
                    $('#greska').html("error else" + errorThrown);
                }
                $('#greska').show();
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});
