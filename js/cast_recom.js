const com_model = await tf.loadLayersModel("model/tfjs_compactability/model.json");
const Green_model = await tf.loadLayersModel("model/tfjs_GreenCompStrength/model.json");
const per_model = await tf.loadLayersModel("model/tfjs_permeability/model.json");


let index = 1;
var option = 0;

$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        switch (tab_id) {
            case 'tab-1':
                option = 0;
                $('#search_val').attr('placeholder','29~40');
                $('#search_val').val('');
                break;
            case 'tab-2':
                option = 1;
                $('#search_val').attr('placeholder','15~23');
                $('#search_val').val('');
                break;
            case 'tab-3':
                option = 2;
                $('#search_val').attr('placeholder','114~220');
                $('#search_val').val('');
                break;
            default:
                break;
        }
        
        $('ul.tabs li').removeClass('current');
        //$('.tab-content').removeClass('current');

        $(this).addClass('current');
        //$("#"+tab_id).addClass('current');

    })
    
})



$("#search_btn").click(function(){

    $('#table_data > tbody > tr').remove();
    index = 1;

    var _arr_ = [];
    var search_val = $("#search_val").val();
    var GFD_12, GFD_20, GFD_30, GFD_40, GFD_50, GFD_70, GFD_100,GFD_140,GFD_200,GFD_270,Pan,Moisture,MB,AFS_c,AFS_g = 0;
    var _low_, _high_ = 0;

    
    var min, max;
    
    if($("#search_val").val() == ""){
        $("#search_input_error").text("값을 입력해 주세요!!");
        return false;
    } else{
        $("#search_input_error").text("\u00a0");
    }

    switch (option) {
        case 0:
            min = 29;
            max = 40;
            break;
        case 1:
            min = 15;
            max = 23;
            break;
        case 2:
            min = 114;
            max = 220;
            break;
        default:
            break;
    }

    if($("#search_val").val() == ""){
        alert("입력 오류");
        return false;
    } else{
        if($("#search_val").val() < min || $("#search_val").val() > max){
            alert("입력 오류");
            $("#search_val").val("");
            return false;
        } else{
            $("#reco_error").text("\u00a0");
        }
    }
    

    function rand(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    _low_ = search_val * 0.9;
    _high_ = search_val * 1.1;

    console.log(_low_, _high_);

    var model;
    var tab = 'tab-1';

    switch (option) {
        case 0:
            model = com_model;
            tab = 'tab-1';
            break;
        case 1:
            model = Green_model;
            tab = 'tab-2';
            break;
        case 2:
            model = per_model;
            tab = 'tab-3';
            break;
        default:
            break;
    }

    console.log("option : " + option, tab);
    console.log(model);

    $('.tab-content').removeClass('current');
    $("#"+tab).addClass('current');

    for(var i=0;i<=1000;i++){
        GFD_12 = parseFloat(rand(0, 0.2));
        GFD_20 = parseFloat(rand(0, 0.05)).toFixed(2);
        GFD_30 = parseFloat(rand(0, 0.6)).toFixed(2);
        GFD_40 = parseFloat(rand(0, 3.7)).toFixed(2);
        GFD_50 = parseFloat(rand(4, 10.8)).toFixed(2);
        GFD_70 = parseFloat(rand(13.8, 22.4)).toFixed(2);
        GFD_100 = parseFloat(rand(9.5, 19)).toFixed(2);
        GFD_140 = parseFloat(rand(0.9, 3.8)).toFixed(2);
        GFD_200 = parseFloat(rand(0.1, 1.1)).toFixed(2);
        GFD_270 = parseFloat(rand(0, 0.5)).toFixed(2);
        Pan = parseFloat(rand(0, 0.3)).toFixed(2);
        Moisture = parseFloat(rand(2.5, 5.3)).toFixed(2);
        MB = parseFloat(rand(7.3, 12.4)).toFixed(2);
        AFS_c = parseFloat(rand(8.3, 16.3)).toFixed(2);
        AFS_g = parseFloat(rand(53.5, 63.5)).toFixed(2);

        _arr_ = [GFD_12, GFD_20, GFD_30, GFD_40, GFD_50, GFD_70, GFD_100,GFD_140,GFD_200,GFD_270,Pan,Moisture,MB,AFS_c,AFS_g];

        //console.log(_arr_);
        
        let result = model.predict(tf.tensor(_arr_, [1,_arr_.length])).arraySync();
        result = parseInt(result);

        //console.log(result);

        if(result >= _low_ && result<=_high_){
            let table_data = "<tr id=table_list"+index+">";
            table_data += "<td>"+index+"</td>";
            table_data += "<td>"+_arr_[0]+"</td>";
            table_data += "<td>"+_arr_[1]+"</td>";
            table_data += "<td>"+_arr_[2]+"</td>";
            table_data += "<td>"+_arr_[3]+"</td>";
            table_data += "<td>"+_arr_[4]+"</td>";
            table_data += "<td>"+_arr_[5]+"</td>";
            table_data += "<td>"+_arr_[6]+"</td>";
            table_data += "<td>"+_arr_[7]+"</td>";
            table_data += "<td>"+_arr_[8]+"</td>";
            table_data += "<td>"+_arr_[9]+"</td>";
            table_data += "<td>"+_arr_[10]+"</td>";
            table_data += "<td>"+_arr_[11]+"</td>";
            table_data += "<td>"+_arr_[12]+"</td>";
            table_data += "<td>"+_arr_[13]+"</td>";
            table_data += "<td>"+_arr_[14]+"</td>";
            table_data += "<td>"+result+"</td>";
            table_data += "<tr>";

            index++;
            $("#table_data > tbody").append(table_data)

            if(index>11){
                break;
            }
        }


    }

})


/*
$("#wb").click(function(){
    search("wb");
    $("#wb").removeClass("choose_tab");
    $("#hb").removeClass("choose_tab");
    $("#db").removeClass("choose_tab");
    $("#wh").removeClass("choose_tab");
    $("#dh").removeClass("choose_tab");
    $("#wb").toggleClass("choose_tab");
})

$("#hb").click(function(){
    search("hb");
    $("#wb").removeClass("choose_tab");
    $("#hb").removeClass("choose_tab");
    $("#db").removeClass("choose_tab");
    $("#wh").removeClass("choose_tab");
    $("#dh").removeClass("choose_tab");
    $("#hb").toggleClass("choose_tab");
})

$("#db").click(function(){
    search("db");
    $("#wb").removeClass("choose_tab");
    $("#hb").removeClass("choose_tab");
    $("#db").removeClass("choose_tab");
    $("#wh").removeClass("choose_tab");
    $("#dh").removeClass("choose_tab");
    $("#db").toggleClass("choose_tab");
})

$("#wh").click(function(){
    search("wh");
    $("#wb").removeClass("choose_tab");
    $("#hb").removeClass("choose_tab");
    $("#db").removeClass("choose_tab");
    $("#wh").removeClass("choose_tab");
    $("#dh").removeClass("choose_tab");
    $("#wh").toggleClass("choose_tab");
})

$("#dh").click(function(){
    search("dh");
    $("#wb").removeClass("choose_tab");
    $("#hb").removeClass("choose_tab");
    $("#db").removeClass("choose_tab");
    $("#wh").removeClass("choose_tab");
    $("#dh").removeClass("choose_tab");
    $("#dh").toggleClass("choose_tab");
})
*/