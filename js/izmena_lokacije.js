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
        'dataType': "json",
        'success': function (response) {
            $('#id').val(localStorage.getItem('locationid'))
            $('#naziv').val(localStorage.getItem('locationname'))
            $('#adresa').val(localStorage.getItem('locationadress'))
            $('#grad').val(localStorage.getItem('locationcity'))
            $('#uloga').val(localStorage.getItem('locationcaption'))

            /*
            function sat (x) {
                return Math.floor(x/60)
            }
            function min (x) {
                return x%60
            }

            console.log(JSON.parse(localStorage.getItem('worktime')))

            let locationid = localStorage.getItem('locationid')
            console.log('id location ' + locationid)
            let lokacija = JSON.parse(localStorage.getItem('worktime'))
            console.log(lokacija)

            for (let i=0; i<lokacija.length; i++) {
                 if (parseInt(locationid) === lokacija[i].id) {
                     let radnovreme = lokacija[i].radnoVreme
                     localStorage.setItem('pozicija', i)
                     console.log(radnovreme)

                     for (i=0; i<radnovreme.length; i++) {
                         let OdSat = sat(radnovreme[i].od);
                         let OdMin = min(radnovreme[i].od);
                         let DoSat = sat(radnovreme[i].do);
                         let DoMin = min(radnovreme[i].do);

                         $('#vreme_od_sati_'+ (i+1)).val(OdSat)
                         $('#vreme_od_min_'+ (i+1)).val(OdMin)
                         $('#vreme_do_sati_'+ (i+1)).val(DoSat).prop('disabled', false);
                         $('#vreme_do_min_'+ (i+1)).val(DoMin).prop('disabled', false);
                     }
                     break
                 }
            }*/
        },
        'error': function (response) {
            console.log(response);
        }
    }
    $.ajax(settings);


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
        var inputValue = $(this).val();

        if (inputValue < 0) {
            $(this).val('');
        }
    });


    //provera polja
    $('#vreme_od_sati_1').on('blur', function() {
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_sati_1').prop('disabled', true);
        } else {
            $('#vreme_do_sati_1').prop('disabled', false);
        }
    });
    $('#vreme_od_sati_2').on('blur', function() {
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_sati_2').prop('disabled', true);
        } else {
            $('#vreme_do_sati_2').prop('disabled', false);
        }
    });
    $('#vreme_od_sati_3').on('blur', function() {
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_sati_3').prop('disabled', true);
        } else {
            $('#vreme_do_sati_3').prop('disabled', false);
        }
    });
    $('#vreme_od_sati_4').on('blur', function() {
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_sati_4').prop('disabled', true);
        } else {
            $('#vreme_do_sati_4').prop('disabled', false);
        }
    });
    $('#vreme_od_sati_5').on('blur', function() {
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_sati_5').prop('disabled', true);
        } else {
            $('#vreme_do_sati_5').prop('disabled', false);
        }
    });
    $('#vreme_od_sati_6').on('blur', function() {
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_sati_6').prop('disabled', true);
        } else {
            $('#vreme_do_sati_6').prop('disabled', false);
        }
    });
    $('#vreme_od_sati_7').on('blur', function() {
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_sati_7').prop('disabled', true);
        } else {
            $('#vreme_do_sati_7').prop('disabled', false);
        }
    });

    $('#vreme_od_min_1').on('change',function(){
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_min_1').prop('disabled', true);
        } else {
            $('#vreme_do_min_1').prop('disabled', false);
        }
    });
    $('#vreme_od_min_2').on('change',function(){
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_min_2').prop('disabled', true);
        } else {
            $('#vreme_do_min_2').prop('disabled', false);
        }
    });
    $('#vreme_od_min_3').on('change',function(){
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_min_3').prop('disabled', true);
        } else {
            $('#vreme_do_min_3').prop('disabled', false);
        }
    });
    $('#vreme_od_min_4').on('change',function(){
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_min_4').prop('disabled', true);
        } else {
            $('#vreme_do_min_4').prop('disabled', false);
        }
    });
    $('#vreme_od_min_5').on('change',function(){
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_min_5').prop('disabled', true);
        } else {
            $('#vreme_do_min_5').prop('disabled', false);
        }
    });
    $('#vreme_od_min_6').on('change',function(){
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_min_6').prop('disabled', true);
        } else {
            $('#vreme_do_min_6').prop('disabled', false);
        }
    });
    $('#vreme_od_min_7').on('change',function(){
        let input = parseInt($(this).val());

        if (input === "") {
            $('#vreme_do_min_7').prop('disabled', true);
        } else {
            $('#vreme_do_min_7').prop('disabled', false);
        }
    });


    //update radimo samo na kompletnim vremenima
    let worktime = [];
    let dan;
    let vreme_od = 0;
    let vreme_do = 0;

    //ponedeljak---------------------------------------------------------------------------------------------------------
    $('#vreme_do_min_1').on("blur", function(e) {
        vreme_od = parseInt($('#vreme_od_sati_1').val()) * 60 + parseInt($('#vreme_od_min_1').val());
        vreme_do = parseInt($('#vreme_do_sati_1').val()) * 60 + parseInt($('#vreme_do_min_1').val());

        worktime.push({
            "dan": "1",
            "od": vreme_od,
            "do": vreme_do
        });
        //console.log(worktime);
    });
    //utorak---------------------------------------------------------------------------------------------------------
    $('#vreme_do_min_2').on("blur", function(e) {
        vreme_od = parseInt($('#vreme_od_sati_2').val()) * 60 + parseInt($('#vreme_od_min_2').val());
        vreme_do = parseInt($('#vreme_do_sati_2').val()) * 60 + parseInt($('#vreme_do_min_2').val());

        worktime.push({
            "dan": "2",
            "od": vreme_od,
            "do": vreme_do
        });
    });
    //sreda---------------------------------------------------------------------------------------------------------
    $('#vreme_do_min_3').on("blur", function(e) {
        vreme_od = parseInt($('#vreme_od_sati_3').val()) * 60 + parseInt($('#vreme_od_min_3').val());
        vreme_do = parseInt($('#vreme_do_sati_3').val()) * 60 + parseInt($('#vreme_do_min_3').val());

        worktime.push({
            "dan": "3",
            "od": vreme_od,
            "do": vreme_do
        });
    });
    //cetvrtak---------------------------------------------------------------------------------------------------------
    $('#vreme_do_min_4').on("blur", function(e) {
        vreme_od = parseInt($('#vreme_od_sati_4').val()) * 60 + parseInt($('#vreme_od_min_4').val());
        vreme_do = parseInt($('#vreme_do_sati_4').val()) * 60 + parseInt($('#vreme_do_min_4').val());

        worktime.push({
            "dan": "4",
            "od": vreme_od,
            "do": vreme_do
        });
    });
    //petak---------------------------------------------------------------------------------------------------------
    $('#vreme_do_min_5').on("blur", function(e) {
        vreme_od = parseInt($('#vreme_od_sati_2').val()) * 60 + parseInt($('#vreme_od_min_2').val());
        vreme_do = parseInt($('#vreme_do_sati_2').val()) * 60 + parseInt($('#vreme_do_min_2').val());

        worktime.push({
            "dan": "5",
            "od": vreme_od,
            "do": vreme_do
        });
    });
    //subota---------------------------------------------------------------------------------------------------------
    $('#vreme_do_min_6').on("blur", function(e) {
        vreme_od = parseInt($('#vreme_od_sati_6').val()) * 60 + parseInt($('#vreme_od_min_6').val());
        vreme_do = parseInt($('#vreme_do_sati_6').val()) * 60 + parseInt($('#vreme_do_min_6').val());

        worktime.push({
            "dan": "6",
            "od": vreme_od,
            "do": vreme_do
        });
    });
    //nedelja---------------------------------------------------------------------------------------------------------
    $('#vreme_do_min_7').on("blur", function(e) {
        vreme_od = parseInt($('#vreme_od_sati_7').val()) * 60 + parseInt($('#vreme_od_min_7').val());
        vreme_do = parseInt($('#vreme_do_sati_7').val()) * 60 + parseInt($('#vreme_do_min_7').val());

        wortkime.push({
            "dan": "7",
            "od": vreme_od,
            "do": vreme_do
        });
    });

    /* update nakon svake promene, ne radi - svakoj vrednosti dodeljuje null vrednost */
    /* kod vazi bez gore definisanih funckija */
/*
    let lokacija = JSON.parse(localStorage.getItem('worktime'))
    y = localStorage.getItem('pozicija')
    let radnovreme = lokacija[y].radnoVreme

    //ponedeljak---------------------------------------------------------------------------
    $('#vreme_od_sati_1').on('change', function() {
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_min_1').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "1")
                    radnovreme[i].od = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "1",
                "od": input * 60,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_sati_1').prop('disabled', true);
        } else {
            $('#vreme_do_sati_1').prop('disabled', false);
        }
    });

    $('#vreme_od_min_1').on('change',function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_sati_1').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "1")
                    radnovreme[i].od = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "1",
                "od": input,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_min_1').prop('disabled', true);
        } else {
            $('#vreme_do_min_1').prop('disabled', false);
        }
    });

    $('#vreme_do_sati_1').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_min_1').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "1")
                    radnovreme[i].do = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "1",
                "od": 0,
                "do": input * 60
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

    $('#vreme_do_min_1').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_sati_1').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "1")
                    radnovreme[i].do = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "1",
                "od": 0,
                "do": input
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });


    //utorak-------------------------------------------------------------------------------
    $('#vreme_od_sati_2').on('change', function() {
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_min_2').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "2")
                    radnovreme[i].od = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "2",
                "od": input * 60,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_sati_2').prop('disabled', true);
        } else {
            $('#vreme_do_sati_2').prop('disabled', false);
        }
    });

    $('#vreme_od_min_2').on('change',function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_sati_2').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "2")
                    radnovreme[i].od = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "2",
                "od": input,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_min_2').prop('disabled', true);
        } else {
            $('#vreme_do_min_2').prop('disabled', false);
        }
    });

    $('#vreme_do_sati_2').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_min_2').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "2")
                    radnovreme[i].do = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "2",
                "od": 0,
                "do": input * 60
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

    $('#vreme_do_min_2').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_sati_2').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "2")
                    radnovreme[i].do = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "2",
                "od": 0,
                "do": input
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });


    //sreda--------------------------------------------------------------------------------
    $('#vreme_od_sati_3').on('change', function() {
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_min_1').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "3")
                    radnovreme[i].od = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "3",
                "od": input * 60,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_sati_3').prop('disabled', true);
        } else {
            $('#vreme_do_sati_3').prop('disabled', false);
        }
    });

    $('#vreme_od_min_3').on('change',function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_sati_3').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "3")
                    radnovreme[i].od = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "3",
                "od": input,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_min_3').prop('disabled', true);
        } else {
            $('#vreme_do_min_3').prop('disabled', false);
        }
    });

    $('#vreme_do_sati_3').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_min_3').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "3")
                    radnovreme[i].do = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "3",
                "od": 0,
                "do": input * 60
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

    $('#vreme_do_min_3').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_sati_3').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "3")
                    radnovreme[i].do = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "3",
                "od": 0,
                "do": input
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });


    //četvrtak
    $('#vreme_od_sati_4').on('change', function() {
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_min_4').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "4")
                    radnovreme[i].od = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "4",
                "od": input * 60,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_sati_4').prop('disabled', true);
        } else {
            $('#vreme_do_sati_4').prop('disabled', false);
        }
    });

    $('#vreme_od_min_4').on('change',function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_sati_4').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "4")
                    radnovreme[i].od = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "4",
                "od": input,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_min_4').prop('disabled', true);
        } else {
            $('#vreme_do_min_4').prop('disabled', false);
        }
    });

    $('#vreme_do_sati_4').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_min_4').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "4")
                    radnovreme[i].do = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "4",
                "od": 0,
                "do": input * 60
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

    $('#vreme_do_min_4').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_sati_4').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "4")
                    radnovreme[i].do = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "4",
                "od": 0,
                "do": input
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });


    //petak
    $('#vreme_od_sati_5').on('change', function() {
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_min_5').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "5")
                    radnovreme[i].od = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "5",
                "od": input * 60,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_sati_5').prop('disabled', true);
        } else {
            $('#vreme_do_sati_5').prop('disabled', false);
        }
    });

    $('#vreme_od_min_5').on('change',function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_sati_5').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "5")
                    radnovreme[i].od = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "5",
                "od": input,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_min_5').prop('disabled', true);
        } else {
            $('#vreme_do_min_5').prop('disabled', false);
        }
    });

    $('#vreme_do_sati_5').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_min_5').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "5")
                    radnovreme[i].do = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "5",
                "od": 0,
                "do": input * 60
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

    $('#vreme_do_min_5').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_sati_5').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "5")
                    radnovreme[i].do = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "5",
                "od": 0,
                "do": input
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });


    //subota
    $('#vreme_od_sati_6').on('change', function() {
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_min_6').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "6")
                    radnovreme[i].od = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "6",
                "od": input * 60,
                "do": 0
            }
            radnovreme.push(dodaj)

            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_sati_6').prop('disabled', true);
        } else {
            $('#vreme_do_sati_6').prop('disabled', false);
        }
    });

    $('#vreme_od_min_6').on('change',function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_sati_6').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "6")
                    radnovreme[i].od = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "6",
                "od": input,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_min_6').prop('disabled', true);
        } else {
            $('#vreme_do_min_6').prop('disabled', false);
        }
    });

    $('#vreme_do_sati_6').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_min_6').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "6")
                    radnovreme[i].do = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "6",
                "od": 0,
                "do": input * 60
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

    $('#vreme_do_min_6').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_sati_6').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "6")
                    radnovreme[i].do = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "6",
                "od": 0,
                "do": input
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });


    //nedelja---------------------------------------------------------------------------------
    $('#vreme_od_sati_7').on('change', function() {
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_min_7').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "7")
                    radnovreme[i].od = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "7",
                "od": input * 60,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_sati_7').prop('disabled', true);
        } else {
            $('#vreme_do_sati_7').prop('disabled', false);
        }
    });

    $('#vreme_od_min_7').on('change',function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_od_sati_7').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "7")
                    radnovreme[i].od = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "7",
                "od": input,
                "do": 0
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)

        if (input === "") {
            $('#vreme_do_min_7').prop('disabled', true);
        } else {
            $('#vreme_do_min_7').prop('disabled', false);
        }
    });

    $('#vreme_do_sati_7').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_min_7').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "7")
                    radnovreme[i].do = input * 60 + x
            }
        }
        else {
            let dodaj = {
                "dan": "7",
                "od": 0,
                "do": input * 60
            }
            radnovreme.push(dodaj)
            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

    $('#vreme_do_min_7').on('change', function(){
        let input = parseInt($(this).val());
        let x = parseInt($('#vreme_do_sati_7').val())
        if (x === "" || isNaN(x))
            x = 0

        if (radnovreme.length > 0) {
            for (let i=0; i < radnovreme.length; i++) {
                if (radnovreme[i].dan === "7")
                    radnovreme[i].do = input + 60 * x
            }
        }
        else {
            let dodaj = {
                "dan": "7",
                "od": 0,
                "do": input
            }
            radnovreme.push(dodaj)

            radnovreme.sort(function(a,b){
                return radnovreme[a].dan - radnovreme[b].dan
            })
        }

        localStorage.setItem('worktime', JSON.stringify(lokacija));
        lokacija = JSON.parse(localStorage.getItem('worktime'))
        console.log(lokacija)
    });

*/
    $('#forma').on('submit', function (e) {
        e.preventDefault();

        let greska = ($('#greska_izmena'))
        let potvrda = ($('#potvrda_izmena'))

        $.ajax({
            "url": config.baseUrl + config.endpoints.lokacija + localStorage.getItem("lokacija_id"),
            "method": "PATCH",
            "timeout": 0,
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            "data": {
                "name": $('#naziv').val(),
                "address": $('#adresa').val(),
                "city": $('#grad').val(),
                "description": $('#uloga').val(),
                "workingHours": JSON.stringify(worktime),
                "apitoken": $('meta[name="apitoken"]').attr("content")
            },
            "success": function (response) {
                console.log(response);
                greska.hide();
                potvrda.show();
                potvrda.html("Измена је сачувана.")
                setTimeout(function() {
                    window.location = 'lista_dogadjaja.html';
                }, 1800);

            },
            "error": function (response) {
                console.log(response);
                greska.show();
                greska.html(response.responseJSON.message)
            }
        });
    })
})

