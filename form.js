function test(a) {
    let inp = document.getElementById("other-s")
    var x = (a.value || a.options[a.selectedIndex].value);  //crossbrowser solution =)
    if(x=="other"){
        inp.style.display = "block";
    }
    else{
        inp.style.display = "none";
    }
    
    console.log(x)
    
}
