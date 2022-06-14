const com_model = await tf.loadLayersModel("model/tfjs_compactability/model.json");
const Green_model = await tf.loadLayersModel("model/tfjs_GreenCompStrength/model.json");
const per_model = await tf.loadLayersModel("model/tfjs_permeability/model.json");

const Calc_btn = document.getElementById('Cast_btn');
Calc_btn.addEventListener('click', function(e){

    let input_list = ["GFD-12", "GFD-20", "GFD-30", "GFD-40", "GFD-50", "GFD-70", "GFD-100","GFD-140","GFD-200","GFD-270","Pan","Moisture","MB","AFS-c","AFS-g"];
    let data_list = new Array();
    for(var i=0; i<15; i++){
        if($('#'+input_list[i]).val() == ""){
            alert("값을 입력해 주세요!!");
            return false;
        }
        data_list[i] = parseFloat($('#'+input_list[i]).val());
    }

    let com_result = com_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();
    let Green_result = Green_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();
    let per_result = per_model.predict(tf.tensor(data_list, [1,data_list.length])).arraySync();

    $("#Compactability").text(parseFloat(com_result).toFixed(2));
    $("#Green_Comp").text(parseFloat(Green_result).toFixed(2));
    $("#Permeability_No").text(parseFloat(per_result).toFixed(2));

});