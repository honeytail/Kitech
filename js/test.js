let index = 1;

const Calc_btn = document.getElementById('Calc_btn');

Calc_btn.addEventListener('click', function(e){

    var _arr_ = [];
    var _dv_ = document.getElementById("__Wb__").value;
    var __LP__, __SS__, __Tj__, __Ts__, __Tp__, __Tc__, __HC__ = 0;
    var _low_, _high_ = 0;

    function rand(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    _low_ = Number(_dv_) - 10;
    _high_ = Number(_dv_) + 10;

    console.log(_low_, _high_);

    tf.loadLayersModel('model/model.json').then(function(model){
    
        for(i=0;i<=1000;i++){
            __LP__ = Math.floor(rand(260, 500));
            __SS__ = Math.floor(rand(5, 25));
            __Tj__ = Number(rand(21, 22)).toFixed(3); //내림으로 수정
            __Ts__ = Number(rand(21, 27)).toFixed(3);
            __Tp__ = Number(rand(25, 29)).toFixed(3);
            __Tc__ = Number(rand(20, 26)).toFixed(3);
            __HC__ = Number(rand(26, 38)).toFixed(3);

            _arr_ = [__LP__, __SS__, __Tj__, __Ts__, __Tp__, __Tc__, __HC__];
    
            console.log(_arr_);
            
            let result = model.predict(tf.tensor(_arr_, [1,_arr_.length])).arraySync();
            result = parseInt(result);

            console.log(result);

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
                table_data += "<td>"+result+"</td>";
                table_data += "<tr>";
    
                index++;
                $("#table_data").append(table_data)
            }

        }

    });

    

})