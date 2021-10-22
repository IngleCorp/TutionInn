var flag = false;
function addClass() {
    flag = !flag;
    var v = document.getElementById("body");
    if(flag== true){
        v.className += "addCSS";
    }
    else {
        v.className -= "addCSS";
    }
    
    console.log(flag)
}

