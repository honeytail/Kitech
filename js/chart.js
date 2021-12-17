
const Calc_btn = document.getElementById('Calc_btn');
Calc_btn.addEventListener('click', function(e){
    let input_list = ["__LP__", "__SS__", "__Tj__", "__Ts__", "__Tp__", "__Tc__", "__HC__"];
    let data_list = new Array();
    for(var i=0; i<7; i++){
        if($('#'+input_list[i]).val() == ""){
            alert("값을 입력해 주세욧!!");
            return false;
        }
        data_list[i] = parseFloat($('#'+input_list[i]).val());
    }

    var wb_result = wb_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();
    var hb_result = hb_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();
    var db_result = db_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();
    var wh_result = wh_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();
    var dh_result = dh_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();

    $("#Width_of_bead").text(parseFloat(wb_result).toFixed(2));
    $("#height_of_bead").text(parseFloat(hb_result).toFixed(2));
    $("#depth_of_bead").text(parseFloat(db_result).toFixed(2));
    $("#width_of_HAZ").text(parseFloat(wh_result).toFixed(2));
    $("#Depth_of_HAZ").text(parseFloat(dh_result).toFixed(2));

    /*
    console.log(Math.round(result * 100) / 100);
    console.log("결과 : " + result);
    */

});