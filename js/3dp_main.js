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
        case "__TJ__":
            min = 21;
            max = 22;
            break;
        case "__TS__":
            min = 21;
            max = 27;
            break;
        case "__TP__":
            min = 25;
            max = 29;
            break;
        case "__TC__":
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
        $("#"+input+"error").text("입력 오류");
        return false;
    } else{
        if($("#"+input).val() < min || $("#"+input).val() > max){
            $("#"+input+"error").text("입력 오류");
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
            $('#search_val').attr('placeholder', '500 ~ 1100');
            break;
        case "hb":
            $('#search_val').attr('placeholder', '10 ~ 400');
            break;
        case "db":
            $('#search_val').attr('placeholder', '0 ~ 200');
            break;
        case "wh":
            $('#search_val').attr('placeholder', '760 ~ 1600');
            break;
        case "dh":
            $('#search_val').attr('placeholder', '130 ~ 550');
            break;
        default:
            break;
    }

    return 0;
}

function _search_check(input){

    var min, max;
    
    if($("#search_val").val() == ""){
        $("#search_input_error").text("값을 입력해 주세요!!");
        return false;
    } else{
        $("#search_input_error").text("\u00a0");
    }
}


function input_box_check(option){

    var min, max;
    
    if($("#search_val").val() == ""){
        $("#search_input_error").text("값을 입력해 주세요!!");
        return false;
    } else{
        $("#search_input_error").text("\u00a0");
    }

    switch (option) {
        case 0:
            min = 520;
            max = 1170;
            break;
        case 1:
            min = 70;
            max = 150;
            break;
        case 2:
            min = 10;
            max = 170;
            break;
        case 3:
            min = 800;
            max = 1500;
            break;
        case 4:
            min = 210;
            max = 470;
            break;
        default:
            break;
    }

    if($("#search_val").val() == ""){
        $("#reco_error").text("입력 오류");
        return false;
    } else{
        if($("#search_val").val() < min || $("#search_val").val() > max){
            $("#reco_error").text("입력 오류");
            $("#search_val").val("");
            return false;
        } else{
            $("#reco_error").text("\u00a0");
        }
    }
}