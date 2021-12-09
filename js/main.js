function _input_check(input) {

    var min, max;
    switch (input) {
        case "__LP__":
            min = 260;
            max = 500;
            break;
        case "__SS__":
            min = 5;
            max = 25;
            break;
        case "__Tj__":
            min = 21;
            max = 22;
            break;
        case "__Ts__":
            min = 21;
            max = 27;
            break;
        case "__Tp__":
            min = 25;
            max = 29;
            break;
        case "__Tc__":
            min = 20;
            max = 26;
            break;
        case "__HC__":
            min = 26;
            max = 38;
            break;    
        default:
            break;
    }
    
    if($("#"+input).val() == ""){
        $("#"+input+"error").text("값을 입력해 주세요!!");
        return false;
    } else{
        if($("#"+input).val() < min || $("#"+input).val() > max){
            $("#"+input+"error").text("범위 내의 값을 입력해 주세요!!");
            $("#"+input).val("");
            return false;
        } else{
            $("#"+input+"error").text("\u00a0");
        }
    }
    
}

function search_select(id) {
    switch (id) {
        case "wb":
            $('#search_val').attr('placeholder', '500~1100');
            break;
        case "hb":
            $('#search_val').attr('placeholder', '10~400');
            break;
        case "db":
            $('#search_val').attr('placeholder', '0~200');
            break;
        case "wh":
            $('#search_val').attr('placeholder', '760~1600');
            break;
        case "dh":
            $('#search_val').attr('placeholder', '130~550');
            break;
        default:
            break;
    }

    return 0;
}

function _search_check(input){

    var min, max;
    var key = $("#key_select option:selected").val();

    console.log(key);

    switch (key) {
        case "wb":
            min = 500;
            max = 1100;
            break;
        case "hb":
            min = 10;
            max = 400;
            break;
        case "db":
            min = 0;
            max = 200;
            break;
        case "wh":
            min = 760;
            max = 1600;
            break;
        case "dh":
            min = 130;
            max = 550;
            break;
        default:
            break;
    }
    
    if($("#search_val").val() == ""){
        $("#search_input_error").text("값을 입력해 주세요!!");
        return false;
    } else{
        if($("#search_val").val() < min || $("#search_val").val() > max){
            $("#search_input_error").text("범위 내의 값을 입력해 주세요!!");
            $("#search_val").val("");
            return false;
        } else{
            $("#search_input_error").text("\u00a0");
        }
    }
}