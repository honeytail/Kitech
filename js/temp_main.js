var ctx_01 = document.getElementById('myChart_01');	
var ctx_02 = document.getElementById('myChart_02');
var ctx_03 = document.getElementById('myChart_03');
var ctx_04 = document.getElementById('myChart_04');
var config = {
    type: 'line',
    data: {
        labels: [ // Date Objects
            '-15',
            '-10',
            '-5',
            '0',
            '5',
            '10',
            '15'
        ],
        datasets: [{
        }]
    },
    options: {
        maintainAspectRatio: false,
        title: {
            text: '???'
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '차트'
                }
            }]
        },
    }
};

//차트 그리기
var myChart_01 = new Chart(ctx_01, config);
var myChart_02 = new Chart(ctx_02, config);
var myChart_03 = new Chart(ctx_03, config);
var myChart_04 = new Chart(ctx_04, config);

function push_chart(){
    var color1 = Math.floor(Math.random() * 256);
    var color2 = Math.floor(Math.random() * 256);
    var color3 = Math.floor(Math.random() * 256);
    
    console.log(color1 + " " + color2 + " " + color3);
    
    var newDataset = {
        label: '???',
        borderColor : 'rgba('+color1+', '+color2+', '+color3+', 1)',
        backgroundColor : 'rgba('+color1+', '+color2+', '+color3+', 1)',
        data: [],
        fill: false
    }
    
    // newDataset에 데이터 삽입
    for (var i=0; i< 7; i++){
        var num = Math.floor(Math.random() * 800);
        //console.log(num);
        newDataset.data.push(num);
    }
    
    // chart에 newDataset 푸쉬
    config.data.datasets.push(newDataset);
    
    myChart.update();	//차트 업데이트
}

const Calc_btn = document.getElementById('Calc_btn');
Calc_btn.addEventListener('click', function(e){
    let input_list = ["__LP__", "__SS__", "__Tj__", "__Ts__", "__Tp__", "__Tc__", "__HC__"];
    let data_list = {};
    for(var i=0; i<7; i++){
        if($('#'+input_list[i]).val() == ""){
            alert("빈칸");
            return false;
        }
        data_list[5] = Number($('#'+input_list[i]).val());
    }

    alert("로딩중");

    var __LP__ = parseFloat(document.getElementById('__LP__').value);
    var __SS__ = parseFloat(document.getElementById('__SS__').value);
    var __Tj__ = parseFloat(document.getElementById('__Tj__').value);
    var __Ts__ = parseFloat(document.getElementById('__Ts__').value);
    var __Tp__ = parseFloat(document.getElementById('__Tp__').value);
    var __Tc__ = parseFloat(document.getElementById('__Tc__').value);
    var __HC__ = parseFloat(document.getElementById('__HC__').value);

    var result = 0;
    var chart_arr = [];
    var chart_LP;
    var chart_result;
    var __x__ = 15;

    config.data.datasets.splice(0,10);

    tf.loadLayersModel('model/model.json').then(function(model){

        var arr = [__LP__, __SS__, __Tj__, __Ts__, __Tp__, __Tc__, __HC__];
        console.log(arr);
    
        result = model.predict(tf.tensor(arr, [1,arr.length])).arraySync();

        console.log(Math.round(result * 100) / 100);

        document.getElementById('Width_of_bead').innerHTML = parseFloat(result).toFixed(2);

        console.log("결과 : " + result);
        
        //나중에 반복문 돌릴꺼
            chart_arr = arr;

            var color1 = Math.floor(Math.random() * 256);
            var color2 = Math.floor(Math.random() * 256);
            var color3 = Math.floor(Math.random() * 256);
            
            console.log(color1 + " " + color2 + " " + color3);
            
            var newDataset = {
                label: 'Width of bead',
                borderColor : 'rgba('+color1+', '+color2+', '+color3+', 1)',
                backgroundColor : 'rgba('+color1+', '+color2+', '+color3+', 1)',
                data: [],
                fill: false
            }
            
            // newDataset에 데이터 삽입
            for (var i=0; i< 7; i++){
                
                chart_LP = __LP__ - __x__;
                chart_arr[0] = chart_LP;

                chart_result = model.predict(tf.tensor(chart_arr, [1,chart_arr.length])).arraySync();
                var num = parseInt(chart_result);
                //console.log(num);
                newDataset.data.push(num);

                __x__ = __x__ + 5;
            }

            // chart에 newDataset 푸쉬
            config.data.datasets.push(newDataset);

            myChart_01.update();	//차트 업데이트

            __X__ = 15;

            // newDataset에 데이터 삽입
            for (var i=0; i< 7; i++){
                
                chart_LP = __SS__ - __x__;
                chart_arr[0] = chart_LP;

                chart_result = model.predict(tf.tensor(chart_arr, [1,chart_arr.length])).arraySync();
                var num = parseInt(chart_result);
                //console.log(num);
                newDataset.data.push(num);

                __x__ = __x__ + 5;
            }

            config.data.datasets.push(newDataset);

            myChart_02.update();

            myChart_03.update();
            myChart_04.update();

            //for(i=0;i<=4;i++){
            //    push_chart()
            //}

    });

});
